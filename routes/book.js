let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the BookModel
let Book = require('../models/book');


// create a route
// GET route for the Book List page - READ operation
router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book', {title: 'Book List', BookList: bookList})
        }
    });
});

module.exports = router;