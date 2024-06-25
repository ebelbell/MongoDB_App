// this model is used to create products and save models into the database
const mongoose = require('mongoose');


const reviewSchema = mongoose.Schema( 
    {
        username: {
            type: String,
            required: [true, "Please type your username."],
        },
        
        rating: {
            type: Number,
            required: [true, "What would you rate this book, out of 5?"],
        },

        review: {
            type: String,
            required: [true, "Write your book review here: "],
        },

    },
);

// allow mongoDB to use this
const review = mongoose.model("review", reviewSchema);

module.exports = review;