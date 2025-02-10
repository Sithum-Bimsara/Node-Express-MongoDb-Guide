const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});



mongoose.connect("mongodb+srv://sithum22:nYaK9Lkc0h8aqtLs@backenddb.nbpav.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Connected to the database!');
    app.listen(3000, () => {
    console.log('Server running on port 3000')
});

})
.catch(() => {
    console.log("Connection failed!");
})

