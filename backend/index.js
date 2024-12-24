const express = require("express");
const mongoose = require('mongoose');
const app = express();
const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017//e-comm") // initiate the host
    const productSchema = new mongoose.Schema({}); // initialize the productschema
    const product = mongoose.model("products", productSchema); //our collection name
    const data = await product.find(); // we can only use await inside async function
    console.warn(data);
}

connectDB();


app.listen(5000);