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
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const morgan = require("morgan");
const homeRouter = require("./routes/home");
const storeRouter = require("./routes/store");
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(morgan("dev"));
app.use(express.static("./public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

var minute = 60 * 1000;

MongoConnect((MongoClient) => {
  app.use(
    session({
      secret: "test development",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 10 * minute, //cookie has age = 10 min
      },
      store: new MongoStore({ client: MongoClient, dbName: "store" }),
    })
  );
  app.use(homeRouter);
  app.use(storeRouter);
  app.use(authRouter);

  app.use((req, res, next) => {
    res.status(404).render("404");
  });
  app.listen(3000);
});
