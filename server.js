var express = require('express');
var bodyParser = require('body-parser');
var logger = require('./logger');
var mongoose = require('./src/mongoose');
var app = express();
app.listen(8000);
console.log('Server started on localhost:8000')

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://www.news-simple-site.com/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
     User.findOrCreate({ googleId: profile.id }, function (err, user) {
       return done(err, user);
     });
}
));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('view engine', 'ejs');
app.set('views', './views')
 
app.use(function (req, res, next) {
  logger.info(req.url);
  next();
});


var blogs = {
  id1: 'dasdf',
  id2: 'sadfasdf',
  id3: 'fasdfas',
  id4: 'asfda',
  id5: 'fdsa',
  id6: 'adfasdf',
  id7: 'qwersad',
  id8: 'eqwrasd',
  id9: 'reaasdf',
}

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/blogs/:id', function (req, res) {
  res.json({id: req.params.id});
});

app.get('/blogs', function (req, res) {
  res.json(blogs);
});

app.post('/blogs/:id', function (req, res) {
  blogs[req.params.id] = req.body;
  res.send(`${req.params.id} updated`);
});

app.put('/blogs/:id', function (req, res) {
  blogs[req.params.id] = req.body;
  res.send(`${req.params.id} added`);
});

app.delete('/blogs/:id', function (req, res) {
  delete blogs[req.params.id];
  res.send(`${req.params.id} deleted`);
});

app.use(function(req, res, next) {
  res.render('error', { error: 404, body: 'please contact administrator', title: 'Page not found' }, function(err, html) {
    logger.info('error 404');
    res.status(404).send(html);
  });
});

app.use(function(err, req, res, next) {
  res.render('error', { error: 500, body: 'please contact administrator', title: 'You got error' }, function(err, html) {
    logger.info('error 500');
    res.status(500).send(html);
  });
});
 