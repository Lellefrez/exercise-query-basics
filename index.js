import express from "express";
import dotenv from "dotenv";
dotenv.config();
const { MONGO_URI } = process.env
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({ origin: '*' }))

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Congratulazioni, ti sei collegato a MongoDB');
        app.listen(3000, () => {
            console.log('in ascolto sulla porta 3000')
        })
    })
    .catch(err => console.log(err))