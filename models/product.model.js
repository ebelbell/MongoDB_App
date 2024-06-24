// this model is used to create products and save models into the database
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema( 
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },
    },
    {
        // timestamp allows to have extra fields, when it was created and what time was the latest update
        timestamps: true,
    }
);

// allow mongoDB to use this
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;