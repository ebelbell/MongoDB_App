import book from '../models/book.js';
import express from 'express';
const router = express.Router();


router
    .route('/')
    .get((req, res) => {
        console.log('Data works');
    });

// app.get('/api/book', async (req, res) => {
//     try {
//         const books = await Book.find({});
//         res.status(200).json(products);
//     } catch (err)  {
//         res.status(500).json({message: err.message});
//     }
// });

// // GET a product 
// app.get('/api/book/:id', async (req, res) => {  
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id); 
//         res.status(200).json(product);
//     } catch (err) {
//         res.status(500).json({message: err.message});
//     }
// });

export default router;