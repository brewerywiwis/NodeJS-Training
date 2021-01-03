// const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
//   res.write("<html>");
//   res.write("<head><title>brew</title></head>");
//   res.write("</html>");
// }

// const server = http.createServer(requestListener);
// server.listen(5000);

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("in the middleware");
  res.send("hello world");
});

app.listen(3000);
