import book from '../models/book.js';
import express from 'express';
const router = express.Router();

router
    .route('/')
    .get(req, res => {
        console.log('Data works');
    });