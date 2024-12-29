const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
const app = express();


app.use(express.json()); // to get data
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    console.log("Request Body:", req.body);
    resp.send(result) // to check in postman if its working properly by sending specifics in body
});  //two parameters this is coming from express for api, accepts path

//api route for login
app.post("/login", async (req, resp) => {

    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user); // Send the user details if found
        } else {
            resp.send({ result: "User not found" }); // Send error message if not found
        }
    }
    else {
        resp.send({ result: "No user found" })
    }

});

// api route for products creating its link, second parameter callback function with 2 parameters
app.post("/add-product", async (req, resp) => {

    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result)

})

app.listen(5000);

