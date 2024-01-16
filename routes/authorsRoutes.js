import express from "express"
import Author from "../models/authors.js"
const authorRotes = express.Router()
authorRotes.get('/', async (req, res) => {
    try {
        const authors = await Author.find();
        res.send(authors)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

authorRotes.post('/', async (req, res) => {
    try {
        const author = await Author.create(req.body)
        res.send(author)
    } catch (e) {
        res.status(400).send(e.message)
    }
})
authorRotes.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const author = await Author.findById(id)
        res.send(author)
    } catch (e) {
        res.status(404).send(`no Author with id ${id} was found`)

    }
})
export default authorRotes