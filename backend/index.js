const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

const Jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';

const app = express();


app.use(express.json()); // to get data
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    console.log("Request Body:", req.body);
    Jwt.sign({result},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            resp.send({result:"Something went wrong, please try after some time"})
        }
        resp.send({result,auth:token}); // Send the user details if found
    }) 
    // resp.send(result); // to check in postman if its working properly by sending specifics in body
}); //two parameters this is coming from express for api, accepts path

//api route for login
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    resp.send({result:"Something went wrong, please try after some time"})
                }
                resp.send({user,auth:token}); // Send the user details if found
            })            
            
        } else {
            resp.send({ result: "User not found" }); // Send error message if not found
        }
    } else {
        resp.send({ result: "No user found" });
    }
});

// api route for products creating its link, second parameter callback function with 2 parameters
app.post("/add-product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
});

app.get("/products", async (req, resp) => {
    const products = await Product.find().select("-userId"); // find method will prodive all data from that table, select method to specify the variables

    // simply means we have some data in it
    if (products.length > 0) {
        resp.send(products); // return the data from it
    } else {
        resp.send({ result: "No product found" }); // prompt there's none in that
    }
}); //this function will return a promise so we need to use async and await

app.delete("/product/:id", async (req, resp) => {
    let result = await Product.deleteOne({ _id: req.params.id }); // delete the id spcified
    resp.send(result);
});

// API for update single product
app.get("/product/:id", async (req, resp) => {
    let result = await Product.findOne({ _id: req.params.id }); //find only one
    if (result) {
        resp.send(result);
    } else {
        resp.send({ result: "No result found" });
    }
});

// new route for api to update the product
app.put("/product/:id", async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    ); // when we are updating, we use this updateOne method and having its two parameters, first is the data then what we want to update the data is the 2nd object
    resp.send(result);
});

// Endpoint for searching products by a key provided in the URL parameter
app.get("/search/:key",verifyToken, async (req, resp) => {
    // Use the 'Product' model to search the database
    // The query uses the '$or' operator to match the 'name' field
    // The '$regex' operator performs a case-sensitive pattern match with the key
    // 'req.params.key' contains the dynamic search term provided in the URL
    let result = await Product.find({
        $or: [
            {
                name: { $regex: req.params.key },
            },
            { 
                company: { $regex: req.params.key } 
            },
            { 
                category: { $regex: req.params.key } 
            }
        ],
    });

    // Send the search results back to the client as the response
    resp.send(result);
});


function verifyToken(req,resp,next){
    console.warn(req.headers['authorization'])
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        Jwt.verify(token, jwtKey,(err, valid)=>{

            if(err){
                resp.send("Please provide a valid token")
            }
            else{
                next();
            }

        })

    }
    else{
        resp.status(403).send({result:'Please provide a token'})
    }
    next();
}

app.listen(5000);
