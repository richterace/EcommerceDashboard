const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();


app.use(express.json()); // to get data
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    console.log("Request Body:", req.body);
    resp.send(result) // to check in postman if its working properly by sending specifics in body
});  //two parameters this is coming from express for api, accepts path

app.listen(5000);

