'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const shortenRoutes = require('./routes/shorten');

const app = express();

//static
app.use(express.static(__dirname + '/static'));

//body parser
app.use(bodyParser.urlencoded( {extended: false} ));

//views
app.set('views', __dirname + '/views');

//routes
shortenRoutes(app);

const listener = app.listen(process.env.PORT, () => {
	mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
	console.log('Listening on port ' + listener.address().port);
});