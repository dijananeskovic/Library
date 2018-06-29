const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();
const bookService = require('../services/goodreadsService');

function router(nav) {
  const { getIndex, getById, middleware } = bookController(bookService, nav);
  bookRouter.use(middleware);
  bookRouter.route('/') // default route localhost:port/books/    (show a list of all the books)
    .get(getIndex);

  bookRouter.route('/:id') // route localhost:port/books/:id      (show a specific book)
    .get(getById);
  return bookRouter;
}


module.exports = router;
