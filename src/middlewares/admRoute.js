module.exports = (req, res, next) => {
  if (req.session.user) {
    if (req.session.user.rol === 0) {
      return res.redirect("/");
    }
  } else {
    return res.redirect("/crud");
  }
  next();
};

//Si el rol es usuario va a ver el listado y puede también ver el detalle, sino va al CRUD