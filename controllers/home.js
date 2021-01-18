exports.getHomePage = (req, res, next) => {
  console.log(res.locals);
  res.render("home");
};
