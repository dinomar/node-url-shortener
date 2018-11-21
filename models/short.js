'use strict';
const mongoose = require('mongoose');
const shortId = require('../helpers/shortid');


/*======================================
	Schema
======================================*/
const Schema = mongoose.Schema;
const shortSchema = new Schema({
	url: {
		type: String
	},
	original: {
		type: String,
		required: true
	},
	created_on: {
		type: Date
	}
});

/*======================================
	Middleware
======================================*/
//add date && generate new url id
shortSchema.pre('save', function() {
	const currentDate = new Date();
	
	if (!this.created_on) {
		this.created_on = currentDate;
	}
	
	if (!this.url) {
		this.url = shortId.generate();
	}
	
	next();
});


const Short = mongoose.model('Short', shortSchema);
module.exports = Short;