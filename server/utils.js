exports.startSession = (req, res, dataVal) => {
  req.session.user = {
    name: dataVal.username,
    id: dataVal.id
  };
  res.send(dataVal.username);
};