const db = require("../models/index");

exports.getBooks = (req, res) => {
    db.Book.find({})
    .then(books => {
        res.json(books);
    }).catch(err => {
        res.send(err);
    });
}

exports.getBgBooks = (req, res) => {
    db.Book.find({language: "Bulgarian"})
    .then(books => {
        res.json(books);
    }).catch(err => {
        res.send(err);
    });
}

exports.getEnBooks = (req, res) => {
    db.Book.find({language: "English"})
    .then(books => {
        res.json(books);
    }).catch(err => {
        res.send(err);
    });
}

exports.createBook = (req, res) => {
    db.Book.create(req.body)
    .then(book => {
        res.status(201).json(book);
    }).catch(err => {
        res.send(err);
    });
}

exports.deleteBook = (req, res) => {
    db.Book.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json({message: "The todo was deleted successfully!"})
    }).catch(err => {
        res.send(err);
    });
}