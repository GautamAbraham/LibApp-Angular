const express = require("express");
const booksRouter = express.Router();
const cors = require("cors");
booksRouter.use(
    cors({
        origin: "*",
    })
);
booksRouter.use(express.json());

const bookData = require("../model/bookData");

booksRouter.get("/", function (req, res) {
    bookData.find().then(function (books) {
        res.send(books);
    });
});
booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    bookData.findOne({ _id: id }).then(function (book) {
        res.send(book);
    });
});
booksRouter.post("/addbook", function (req, res) {
    let temp = req.body.book;
    let item = {
        title: temp.title,
        author: temp.author,
        genre: temp.genre,
        desc: temp.desc,
        img: temp.img,
    };
    console.log("adding book");
    let book = bookData(item);
    book.save().then((book) => {
        console.log(book);
    });
});
booksRouter.post("/update", function (req, res) {
    let temp = req.body.book;
    const id = temp._id;
    var myquery = { _id: id };
    var newvalues = {
        $set: {
            title: temp.title,
            author: temp.author,
            genre: temp.genre,
            desc: temp.desc,
            img: temp.img,
        },
    };
    console.log(temp);
    bookData.updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 book updated");
    });
});
booksRouter.post("/delete", function (req, res) {
    let temp = req.body.book;
    const id = temp._id;
    bookData.deleteOne({ _id: id }).then(() => {
        console.log("deleted the book");
    });
});

module.exports = booksRouter;
