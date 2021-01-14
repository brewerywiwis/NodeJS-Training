// const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
//   res.write("<html>");
//   res.write("<head><title>brew</title></head>");
//   res.write("</html>");
// }

// const server = http.createServer(requestListener);
// server.listen(5000);
const path = require("path");
const rootDir = require("./utils/path");

const express = require("express");
const app = express();
const MongoConnect = require("./utils/database").MongoConnect;
const homeRouter = require("./routes/home");
const storeRouter = require("./routes/store");
const authRouter = require("./routes/auth");
const signUpRouter = require("./routes/signup");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRouter);
app.use(storeRouter);
app.use(authRouter);
app.use(signUpRouter);
// app.use("/", (req, res, next) => {
//   console.log("in the middleware");
//   res.send("hello world");
// });

// app.use("/user", (req, res, next) => {
//   console.log("in the middleware");
//   res.send("hello world");
// });

app.use((req, res, next) => {
  res.status(404).render("404");
});

MongoConnect(() => {
  app.listen(3000);
});
