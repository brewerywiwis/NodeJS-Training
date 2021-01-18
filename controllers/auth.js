const userModel = require("../models/user");
const bcrypt = require("bcrypt");

exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.postLoginPage = async (req, res, next) => {
  // console.log("Clicked log in btn");
  // res.setHeader("Set-Cookie", "isLoggedIn=true");
  const username = req.body.uname;
  const password = req.body.psw;
  userModel.getUserByUsername(username).then((user) => {
    if (user) {
      bcrypt
        .compare(password, user.Password)
        .then((result) => {
          if (result === true) {
            req.session.isLoggedIn = true;
            return res.redirect("/");
          } else {
            req.session.isLoggedIn = false;
            return res.redirect("/login");
          }
        })
        .catch(() => {
          return res.redirect("/login");
        });
    } else {
      return res.redirect("/login");
    }
  });
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
