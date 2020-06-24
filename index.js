require("dotenv").config();
const express  = require("express"),
        app    = express(),
        bodyParser = require("body-parser"),
        path      = require("path");

const routes = require("./routes");
const errorHandler = require("./helpers/errorHandler");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/public", express.static(__dirname + "/public"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/", routes);

app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started!`);
})