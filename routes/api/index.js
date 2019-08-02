const router = require("express").Router();
const bookRoutes = require("./books");

// BOOK ROUTES
router.use("/books", bookRoutes);

module.exports = router;