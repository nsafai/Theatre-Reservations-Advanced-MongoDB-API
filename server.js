// server.js - Theater Reservation API
// reference 1: https://github.com/Product-College-Courses/BEW-1.2-Authentication-and-Associations/tree/master/05-Advanced-MongoDB-IRL
// reference 2: http://learnmongodbthehardway.com/schema/theater/

var express = require('express');
var app = express();

// Home page route.
app.get('/', function (req, res) {
  res.send('Welcome to API Theaters. Go to /theaters to get a list of theaters');
});

//  "list all theaters that exist at your venue"
app.get('/theaters', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! This will list all theaters that exist at your venue`});
});

// "list all sessions offered at a specific theater"
app.get('/theaters/:theaterid/sessions', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! This will list all sessions offered at a specific theater`});
});

// "return an array of seats with 1 if booked and 0 if available"
app.get('/theaters/:theaterid/sessions/:sessionid/seats', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! This will return an array of seats with 1 if booked and 0 if available`});
});

// request to book specific seat(s), response should be "success", if available, or "failure" if not
app.post('/theaters/:theaterid/sessions/:sessionid/seats/:seatid', function (req, res) {
  res.json({'stub': `[${req.originalUrl}] Endpoint works! This will request to book specific seat(s), response should be "success", if available, or "failure" if not`});
});

app.listen(3000, function () {
  console.log('API listening on port localhost:3000!');
});
