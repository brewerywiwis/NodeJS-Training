const userModel = require("../models/user");
const bcrypt = require("bcrypt");

exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.postLoginPage = (req, res, next) => {
  // console.log("Clicked log in btn");
  // res.setHeader("Set-Cookie", "isLoggedIn=true");

  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.getSignUpPage = (req, res, next) => {
  res.render("signup");
};

exports.postSignUpPage = (req, res, next) => {
  //   console.log("Clicked sign up btn");
  //   console.log(req.body.uname);
  const username = req.body.uname;
  const password = req.body.psw;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (username && password) {
      userModel
        .createUser(username, hash)
        .then(() => {
          res.redirect("/login");
        })
        .catch(() => {
          console.log("can't create user");
        });
    }
  });
};
