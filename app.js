const express = require("express");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");

const web = require("./routes/web.js");
const api = require("./routes/api.js");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cookieParser());

app.use(session({
  secret: "asdfasdfasaffdsf",
  key: "asdfascaefffa",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: {
    path: '/',
    httpOnly: true
  }
}));

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", router);

module.exports = app;
