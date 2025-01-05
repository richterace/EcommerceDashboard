const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

module.exports = mongoose;

// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://admin:Aceaceace098@cluster0.rmyqc.mongodb.net/ecommerce?retryWrites=true&w=majority", {})
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("Could not connect to MongoDB", err));

// module.exports = mongoose;
