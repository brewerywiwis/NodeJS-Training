exports.getSignUpPage = (req, res, next) => {
  res.render("signup");
};

const userModel = require("../models/user");

exports.postSignUpPage = (req, res, next) => {
  //   console.log("Clicked sign up btn");
  //   console.log(req.body.uname);
  userModel
    .createUser(req.body.uname, req.body.psw)
    .then(() => {
      res.redirect("/login");
    })
    .catch(() => {
      console.log("cant create user");
    });
};
