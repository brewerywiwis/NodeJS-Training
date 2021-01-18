const userModel = require("../models/user");
const bcrypt = require("bcrypt");

exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.postLoginPage = async (req, res, next) => {
  const username = req.body.uname;
  const password = req.body.psw;
  userModel.getUserByUsername(username).then((user) => {
    if (user) {
      bcrypt
        .compare(password, user.Password)
        .then((result) => {
          if (result === true) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return res.redirect("/");
          } else {
            req.session.destroy();
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

exports.getLogOutPage = (req, res, next) => {
  req.session.destroy();
  return res.redirect("/");
};
