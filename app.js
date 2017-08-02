const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const strava = require('strava-v3');

//init app
const app = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//tell express where the static content is
app.use('/public', express.static(path.join(__dirname, 'public')))


//home route
app.get('/', (req, res) => {
	res.render('index');
});

//dashboard route
app.get('/dashboard', (req, res) => {
	res.render('dashboard');
});

app

app.listen(3000, function() {
  console.log('Example app listening otn port 3000!');
});