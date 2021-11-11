const express = require ('express');
const app = express ();

app.use (express.urlencoded ({extended: true}));
app.use (express.json ());

app.use (function (req, res, next) {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header (
    'Access-Control-Allow-Headers',
    'Content-Type,x-xsrf-token,x-requested-with'
  );
  res.header ('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
  next ();
});

app.get ('/success', function (req, res) {
  console.log (req.query);
  res.status (200).send ({message: 'Hello ' + req.query.name});
});

app.get ('/fail', function (req, res) {
  res.status (400).send ({message: 'You failed'});
});

app.post ('/post', function (req, res) {
  console.log (req.body);
  res.status (200).send ({message: 'Success'});
});

app.post ('/', function (req, res) {
  if (!req.body.name) {
    res.status (400).send ({message: 'You did not provide a name'});
  } else {
    res.status (200).send ({message: 'Thank you!'});
  }
});

var port = 80;

app.listen (port);

console.log ('Listening on port', port);
