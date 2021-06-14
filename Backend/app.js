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

const userData = require("./src/model/userData");

const booksRouter = require("./src/routes/bookRoutes");
const authorsRouter = require("./src/routes/authorRoutes");

app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

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

app.listen(port, function () {
    console.log("listening to port", port);
});
