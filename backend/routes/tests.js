const { Router, text } = require('express');
const router = Router();
// const Book = require('../models/Book')

router.get('/', async (req,res) => {
    let date = new Date().toLocaleString("es", {year:"numeric", day:"2-digit", month:"2-digit"});
    res.json({message:'Hello Amigos '+ date});
});
// router.post('/', async(req,res) => {
//     const {title, author, isbn } = req.body;
//     const newBook = new Book({title,author,isbn})
//     await newBook.save();
//     res.json({message: 'Book saved'})

// })
// router.delete('/:id', async(req,res) => {
//     await Book.findByIdAndDelete(req.params.id);
//     res.json({message: 'Book Deleted'})
// }) 

module.exports = router;