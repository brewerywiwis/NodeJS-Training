exports.getHomePage = (req, res, next) => {
  // console.log(req.session.isLoggedIn);
  res.render("home", { isLoggedIn: req.session.isLoggedIn === true });
};
