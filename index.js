const express = require('express');
// using Node.js
const mongoose = require('mongoose');
// import the product model 
const Product = require('./models/product.model')
const app = express();

// middleware
app.use(express.json());



// reponse screen
// client = request, response from the server = response
app.get('/', (req, res) => {
    res.send("Hello World Update");
});


app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200). json(products);
    } catch (err)  {
        res.status(500).json({message: err.message});
    }
});

app.get('/api/products/:id', async (req, res) => {  }


app.post('/api/products', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body); // "Data received"
    try { // save the Product by using await to 
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (err){
        res.status(500).json({message: err.message}); // display the response error message to the server 
    }
});

// connection string from MondoDB
// collection name is 'Node-API'
mongoose.connect("mongodb+srv://ebelbell:MangoMango3!!!@sba319.ankjbb2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=SBA319")
.then(() => {
    console.log("Database is connected!");
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
})
.catch(() => {
    console.log("Database failed.");
});