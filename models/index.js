const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false } )
.then(() => {
    console.log("Successfully connected to the DB");
}).catch(err => {
    console.log(err); 
});

mongoose.Promise = Promise;

module.exports.Book = require("./book");