const express = require('express');
// using Node.js
const mongoose = require('mongoose');
// import the product model 
const Product = require('./models/product.model.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROUTES for products
//app.use("api/products", productRoute);

// reponse screen
// client = request, response from the server = response
app.get('/', (req, res) => {
    res.send('Hello World Update');
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err)  {
        res.status(500).json({message: err.message});
    }
});

// GET a product 
app.get('/api/product/:id', async (req, res) => {  
    try {
        const { id } = req.params;
        const product = await Product.findById(id); 
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

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

// UPDATE a product 
app.put('/api/products/:id', async (req, res) => { 
    try { 
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body); 
        
        if(!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        // res.status(200).json(product);
        const updatedProduct = await Product.findById(id); 
        res.status(200).json(updatedProduct);

    } catch (err){
        res.status(500).json({message: err.message}); // display the response error message to the server 
    }
});

// DELETE a product 
app.delete('/api/products/:id', async (req, res) => { 
    try { 
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id); 
        
        if(!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        // res.status(200).json(product);
        // const updatedProduct = await Product.findById(id); 
        res.status(200).json({message: 'Product deleted successfully'});

    } catch (err){
        res.status(500).json({message: err.message}); // display the response error message to the server 
    }
});


// connection string from MondoDB
// collection name is 'Node-API'
mongoose.connect('mongodb+srv://ebelbell:MangoMango3!!!@sba319.ankjbb2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=SBA319')
.then(() => {
    console.log('Database is connected!');
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
})
.catch(() => {
    console.log('Database failed.');
});