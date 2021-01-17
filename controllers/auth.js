exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.postLoginPage = (req, res, next) => {
  console.log("Clicked log in btn");
  // res.setHeader("Set-Cookie", "isLoggedIn=true");
  req.session.isLoggedIn = true;
  res.redirect("/");
};
