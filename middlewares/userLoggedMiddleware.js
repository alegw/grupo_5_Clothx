function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
  
    if (req.session && req.session.userLogeado) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogeado;
    }
    next();
  }
  
module.exports = userLoggedMiddleware;