const express = require("express");
const authorData = require("../model/authorData");
const authorsRouter = express.Router();
const cors = require("cors");
authorsRouter.use(
    cors({
        origin: "*",
    })
);
authorsRouter.use(express.json());

authorsRouter.get("/", function (req, res) {
    authorData.find().then(function (authors) {
        res.send(authors);
    });
});
authorsRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    authorData.findOne({ _id: id }).then(function (author) {
        res.send(author);
    });
});
authorsRouter.post("/addauthor", function (req, res) {
    let temp = req.body.author;
    let item = {
        author: temp.author,
        famous_work: temp.famous_work,
        desc: temp.desc,
        img: temp.img,
    };
    console.log("adding author");
    let author = authorData(item);
    author.save().then((author) => {
        console.log(author);
    });
});
authorsRouter.post("/update", function (req, res) {
    let temp = req.body.author;
    const id = temp._id;
    var myquery = { _id: id };
    var newvalues = {
        $set: {
            author: temp.author,
            famous_work: temp.famous_work,
            desc: temp.desc,
            img: temp.img,
        },
    };
    console.log(temp);
    authorData.updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 author updated");
    });
});
authorsRouter.post("/delete", function (req, res) {
    let temp = req.body.author;
    const id = temp._id;
    authorData.deleteOne({ _id: id }).then(() => {
        console.log("deleted the author");
    });
});

module.exports = authorsRouter;
