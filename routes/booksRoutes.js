import express from "express"
import Book from "../models/book.js"
const booksRouter = express.Router()
booksRouter.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.send(books)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

booksRouter.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.send(book)
    } catch (e) {
        res.status(400).send(e.message)
    }
})
booksRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        res.send(book)
    } catch (e) {
        res.status(404).send(`no Book with id ${id} was found`)

    }
})
export default booksRouter