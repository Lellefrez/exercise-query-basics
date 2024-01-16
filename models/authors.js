import mongoose from "mongoose";
const { Schema, SchemaType, model } = mongoose;
const adressSchema = new Schema({
    street: String,
    numbrer: Number,
    city: String,
})
const authorSchema = new Schema({
    adress: adressSchema(),
    name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },
    bio: String,
    Image_path: URL,
    famous_for: String,
})
const Author = model('author', authorSchema)
export default Author;