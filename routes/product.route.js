const express = require('express');
const Product = require('./models/product.model.js');
const router = express.Router();

// router.get('/', async (req, res) => { // call the router model 
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (err)  {
//         res.status(500).json({message: err.message});
//     }
// });