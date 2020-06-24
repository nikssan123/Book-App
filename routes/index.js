const express    = require("express"),
          router = express.Router(),
            path = require("path");

const bookRoutes = require("./books");


router.use("/api/books", bookRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;