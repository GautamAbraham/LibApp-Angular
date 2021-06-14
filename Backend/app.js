const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = new express();
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
const port = process.env.PORT || 3000;

const bookData = require("./src/model/bookData");
const authorData = require("./src/model/authorData");
const userData = require("./src/model/userData");

// const booksRouter = require("./src/routes/bookRoutes");
// const authorsRouter = require("./src/routes/authorRoutes");
// const loginRouter = require("./src/routes/loginRoutes");

// app.use(express.urlencoded({ extended: true }));
// app.use("/books", booksRouter);
// app.use("/authors", authorsRouter);
// app.use("/login", loginRouter);

//bookRoutes

app.get("/books", function (req, res) {
    bookData.find().then(function (books) {
        res.send(books);
    });
});
app.get("/books/:id", function (req, res) {
    const id = req.params.id;
    bookData.findOne({ _id: id }).then(function (book) {
        res.send(book);
    });
});
app.post("/addbook", function (req, res) {
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
app.post("/books/update", function (req, res) {
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
app.post("/books/delete", function (req, res) {
    let temp = req.body.book;
    const id = temp._id;
    bookData.deleteOne({ _id: id }).then(() => {
        console.log("deleted the book");
    });
});

//authorRoutes

app.get("/authors", function (req, res) {
    authorData.find().then(function (authors) {
        res.send(authors);
    });
});
app.get("/authors/:id", function (req, res) {
    const id = req.params.id;
    authorData.findOne({ _id: id }).then(function (author) {
        res.send(author);
    });
});
app.post("/addauthor", function (req, res) {
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
app.post("/authors/update", function (req, res) {
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
app.post("/authors/delete", function (req, res) {
    let temp = req.body.author;
    const id = temp._id;
    authorData.deleteOne({ _id: id }).then(() => {
        console.log("deleted the author");
    });
});

//loginRoutes

app.post("/login", (req, res) => {
    let user = req.body;
    userData.findOne(
        { email: user.email, password: user.password },
        function (err, user) {
            if (err || !user) {
                // "if error or no user"
                console.log("invalid Login cred");
                res.status(401).send("Invalid login credentials");
            } else {
                console.log("purrfect");
                let payload = { subject: user.email + user.password };
                let token = jwt.sign(payload, "secretKey");
                res.status(200).send({ token });
                // res.redirect("/");
                // res.send("logged in!");
            }
        }
    );
});
app.post("/signup", function (req, res) {
    console.log(req.body);
    var item = {
        fname: req.body.user.fname,
        lname: req.body.user.lname,
        email: req.body.user.email,
        mob: req.body.user.mob,
        password: req.body.user.password,
    };
    var user = userData(item);
    console.log("purrfect");
    user.save().then((user) => {
        console.log(user);
    });
});

// app.post("/insert", verifyToken, function (req, res) {
//     console.log(req.body);

//     var product = {
//         productId: req.body.product.productId,
//         productName: req.body.product.productName,
//         productCode: req.body.product.productCode,
//         releaseDate: req.body.product.releaseDate,
//         description: req.body.product.description,
//         price: req.body.product.price,
//         starRating: req.body.product.starRating,
//         imageUrl: req.body.product.imageUrl,
//     };
//     var product = new ProductData(product);
//     product.save();
// });

// app.get("/products", function (req, res) {
//     ProductData.find().then(function (products) {
//         res.send(products);
//     });
// });
// app.get("/:id", (req, res) => {
//     const id = req.params.id;
//     ProductData.findOne({ _id: id }).then((product) => {
//         res.send(product);
//     });
// });

// app.put("/update", (req, res) => {
//     console.log(req.body);
//     (id = req.body._id),
//         (productId = req.body.productId),
//         (productName = req.body.productName),
//         (productCode = req.body.productCode),
//         (releaseDate = req.body.releaseDate),
//         (description = req.body.description),
//         (price = req.body.price),
//         (starRating = req.body.starRating),
//         (imageUrl = req.body.imageUrl);
//     ProductData.findByIdAndUpdate(
//         { _id: id },
//         {
//             $set: {
//                 productId: productId,
//                 productName: productName,
//                 productCode: productCode,
//                 releaseDate: releaseDate,
//                 description: description,
//                 price: price,
//                 starRating: starRating,
//                 imageUrl: imageUrl,
//             },
//         }
//     ).then(function () {
//         res.send();
//     });
// });

// app.delete("/remove/:id", (req, res) => {
//     id = req.params.id;
//     ProductData.findByIdAndDelete({ _id: id }).then(() => {
//         console.log("success");
//         res.send();
//     });
// });

app.listen(port, function () {
    console.log("listening to port", port);
});
