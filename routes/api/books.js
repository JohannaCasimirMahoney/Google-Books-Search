const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// MATCH WITH API/BOOKS
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// MATCH WITH API/BOOKS/ID
router.route("/:id")
.get(booksController.findById)
.post(booksController.update)
.delete(booksController.remove);

module.exports = router;