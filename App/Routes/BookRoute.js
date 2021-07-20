const express = require("express");
const router = express.Router();
const Book = require('../Services/BookRoute/BookRoute');


router.route('/books').get(function (req,res) {
    Book.fetchBooks(req,res);
})
.post(function (req,res) {
    Book.insertBook(req,res);
})
.put(function (req,res) {
    Book.updateBook(req,res);
})
.delete(function (req,res) {
    Book.deleteBook(req,res);
})

module.exports = router;