const knex = require('../Utils/database').knex;
const bookshelf = require('bookshelf')(knex);

const BookDetails = bookshelf.Model.extend ({
    tableName : 'book_details'
});

module.exports = BookDetails;
