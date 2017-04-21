const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const db = require('./db/dbHelpers');
const utils = require('./utils');
const app = express();

const port = 1337;

app.use(session({secret: 'secret'}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/db', router);

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  db.login(username, password, (validLogin, data) => {
    if (validLogin) {
      console.log('logged in');
      utils.startSession(req, res, data.dataValues);
    } else {
      res.redirect(401, '/');
    }
  });
});

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  db.createUser(username, password, (data) => {
    console.log('user created, logging in');
    utils.startSession(req, res, data.dataValues);
  });
});

app.get('*', (req, res) => {
  let filepath = path.join(__dirname, '../public/index.html');
  console.log('wildcard')
  res.sendFile(filepath);
}); 

app.listen(port, () => console.log(`Listening on port ${port}`));