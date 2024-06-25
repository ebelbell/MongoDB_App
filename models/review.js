// this model is used to create products and save models into the database
const mongoose = require('mongoose');


const reviewSchema = mongoose.Schema( 
    {
        title: {
            type: String,
            required: [true, "Please enter product name"],
        },

    },
);