import mongoose, { SchemaType } from "mongoose";
const { Schema, SchemaType, model } = mongoose;

const bbookSchema = new Schema({
    author: {
        type: SchemaType.ObjectID(),
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Date,
        required: true
    }
})

const Book = model('Book', bookSchema)
export default Book