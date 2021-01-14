exports.getHomePage = (req, res, next) => {
  res.render("home", { isLoggedIn: req.cookies.isLoggedIn === "true" });
};
