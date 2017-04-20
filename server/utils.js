exports.verifyUserSession = (req, res, next) => {
  if (['/login', '/signup'].includes(req.originalUrl) || req.session.user) {
    console.log('go ahead')
    next();
  } else {
    console.log('not logged in, redirecting')
    res.redirect('/login');
  }
};

exports.startSession = (req, res, dataVal) => {
  req.session.user = {
    name: dataVal.username,
    id: dataVal.id
  };
  res.send(dataVal.username);
};