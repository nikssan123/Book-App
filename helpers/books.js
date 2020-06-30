const db = require("../models/index");

exports.getBooks = (req, res, next) => {
    db.Book.find({})
    .then(books => {
        res.json(books);
    }).catch(err => {
        return next(err);
    });
}

exports.getBgBooks = (req, res, next) => {
    db.Book.find({language: "Bulgarian"})
    .then(books => {
        res.json(books);
    }).catch(err => {
        return next(err);
    });
}

exports.getEnBooks = (req, res, next) => {
    db.Book.find({language: "English"})
    .then(books => {
        res.json(books);
    }).catch(err => {
        return next(err);
    });
}

exports.createBook = (req, res, next) => {
    db.Book.create(req.body)
    .then(book => {
        res.status(201).json(book);
    }).catch(err => {
        return next(err);
    });
}

exports.deleteBook = (req, res, next) => {
    db.Book.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json({message: "The todo was deleted successfully!"})
    }).catch(err => {
        return next(err);
    });
}