'use strict';
const Short = require('../models/short');

module.exports = function (app) {
	
	app.route('/')
		.get((req, res) => {
			return res.sendFile(process.cwd() + "/views/index.html");
		});
		
	app.route('/create')
		.post((req, res) => {
			if(!req.body.url) {
				return res.json({});
			}
			
			const shortUrl = new Short({
				original: req.body.url
			});
			
			shortUrl.save((err, result) => {
				if(err){
					console.log(err);
					return res.json(err);
				}
				
				return res.json(result);
			});
		});
		
	app.route('/:url')
		.get((req, res) => {
			if(req.params.url.includes(".")) {
				return res.end();
			}
			
			if(!req.params.url || req.params.url.length != 6) {
				return res.redirect("/");
			}
			
			const query = { url: req.params.url };
			Short.findOne(query, (err, results) => {
				if(err) {
					console.log(err);
					return res.redirect("/");
				}
				
				if(!results) {
					return res.redirect("/");
				}
				
				return res.redirect(results.original);
			});
		});

}