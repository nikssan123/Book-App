const express = require("express"),
    router    = express.Router(),
    helpers   = require("../helpers/books");


router.route("/")
    .get(helpers.getBooks)
    .post(helpers.createBook);

router.route("/bg")
.get(helpers.getBgBooks);

router.route("/en")
.get(helpers.getEnBooks);

router.route("/:id")
.delete(helpers.deleteBook);

module.exports = router;