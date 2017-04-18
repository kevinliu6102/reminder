const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db/dbHelpers');
const utils = require('./utils');
const app = express();

const port = 1337;

// serve static files from public
app.use(session({secret: 'secret'}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(utils.verifyUserSession);  
app.use('/db', router);

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  db.login(username, password, (validLogin, data) => {
    if (validLogin) {
      console.log('logged in');
      utils.startSession(req, res, data.dataValues);
    } else {
      console.log('invalid credentials');
      res.redirect('/');
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

app.listen(port, () => console.log(`Listening on port ${port}`));