const addCsrf = (req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn === true;
  res.locals.csrfToken = req.csrfToken();
  next();
};

module.exports = addCsrf;
