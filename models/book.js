import mongoose from "mongoose";
const { Schema, SchemaType, model } = mongoose;

const bookSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

const Book = model('Book', bookSchema)
export default Book

//SchemaType.ObjectID()