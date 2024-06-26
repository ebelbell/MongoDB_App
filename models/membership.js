// this model is used to create products and save models into the database
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';


const memberSchema = new mongoose.Schema( 
    {
        firstName: {
            type: String,
            required: [true, "Please enter your first name"],
        },

        lastName: {
            type: String,
            required: [true, "Please enter your last name"],
        },

        id: {
            type: ObjectId, // MongoDB method of giving a unique ID
        },

        username: {
            type: String,
            required: [true, "Please type your username"],
        },

    },
);

// allow mongoDB to use this
const member = mongoose.model("member", memberSchema);

module.exports = member;