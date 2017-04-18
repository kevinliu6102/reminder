exports.verifyUserSession = (req, res, next) => {
  if (['/login', '/signup'].includes(req.originalUrl) || req.session.user) {
    next();
  } else {
    // console.log('redirecting', req.session)
    res.redirect('/login');
  }
};

exports.startSession = (req, res, dataVal) => {
  req.session.user = {
    name: dataVal.username,
    id: dataVal.id
  };
  res.redirect('/');
};