const express = require('express');
const app = express();
// using Node.js
const mongoose = require('mongoose');
// using ES6 imports
//import mongoose from 'mongoose'; 

// console screen
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

// reponse screen
// client = request, response from the server = response
app.get('/', (req, res) => {
    res.send("Hello World Update");
});

// connection string from MondoDB
// collection name is 'Node-API'
mongoose.connect("mongodb+srv://ebelbell:MangoMango3!!!@sba319.ankjbb2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=SBA319")
.then(() => {
    console.log("Database is connected!");
})
.catch(() => {
    console.log("Database failed.");
});