exports.isAuthentication = (req, res, next) => {
  if (req.session.isLoggedIn !== true) {
    return res.redirect("/login");
  }
  next();
};
