exports.getLoginPage = (req, res, next) => {
  res.render("login");
};

exports.postLoginPage = (req, res, next) => {
  console.log("Clicked log in btn");
  res.redirect("/");
};
