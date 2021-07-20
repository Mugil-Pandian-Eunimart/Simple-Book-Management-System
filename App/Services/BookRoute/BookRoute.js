const BookDetails = require('../../Models/BookDetails');

class Book {
    async fetchBooks(req,res) {
        try {
            let data = await BookDetails.fetchAll();
            console.log('Fetched Books');
            return res.send(data.toJSON());
        } catch (err) {
            return res.status(500).json({ 
                error: true, 
                data: { message: err.message } 
            });
        }
    }

    async insertBook(req,res) {
        try {
            let data = await BookDetails.forge({
                id : req.body.id,
                book_title : req.body.book_title,
                book_author : req.body.book_author,
                book_rating : req.body.book_rating
            }).save()
            .then(function () {
                console.log('Inserted Book');
                return res.json({ 
                    error: false, 
                    data: { message: "Book Inserted" } 
                });
            });
        } catch (err) {
            return res.status(500).json({ 
                error: true, 
                data: { message: err.message } 
            });
        }
    }

    async updateBook(req,res) {
        try {
            let data = await BookDetails.forge({
                id : req.query.id,
                book_title : req.body.book_title,
                book_author : req.body.book_author,
                book_rating : req.body.book_rating
            }).save()
            .then(function () {
                console.log('Updated Book');
                return res.json({ 
                    error: false, 
                    data: { message: "Book updated" } 
                });
            });
        } catch (err) {
            return res.status(500).json({ 
                error: true, 
                data: { message: err.message } 
            });
        }
    }

    async deleteBook(req,res) {
        try {
            let data = await BookDetails.forge({id : req.query.id,})
            .fetch({require : true})
            .then(function (row) {
                if (!row) {return res.json({
                    error : true,
                    data : { message : "Record not Found"}
                })}
                console.log(row)
                row.destroy();
                return res.json({ 
                    error: false, 
                    data: { message: "Record Deleted" } 
                });
            });
        } catch (err) {
            return res.status(500).json({ 
                error: true, 
                data: { message: err.message } 
            });
        }
    }
}

module.exports = new Book();