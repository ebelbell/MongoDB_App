// this model is used to create products and save models into the database
const mongoose = require('mongoose');


const bookSchema = mongoose.Schema( 
    {
        title: {
            type: String,
            required: [true, "Please enter book title"],
        },

        genre: {
            type: String,
            required: [true, "Please enter book genre"],
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
    },
);

// allow mongoDB to use this
const book = mongoose.model("book", bookSchema);

module.exports = book;