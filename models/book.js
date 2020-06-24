const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title field cannot be blank"
    },
    author: {
        type: String,
        required: "Author field cannot be blank!"
    },
    description: String,
    genre: {
        type: String,
        enum: ["Sci-Fi", "Short Story", "Novel", "Children's Books", "Other", "Crime Thriller", "Literary Fiction", "Young Adult", "Food", "History", "Memoir", "Politics", "Self-Help"],
        required: "A genre must be specified!"
    },
    language: {
        type: String,
        enum: ["Bulgarian", "English"],
        required: "A language must be specified!"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;