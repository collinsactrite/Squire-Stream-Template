var express = require("express"),
    util    = require('util'),
    http    = require("http"),
    request = require("request"),
    argv    = require('minimist')(process.argv.slice(2));

// EPISODES
if (argv.e) {	
	/*
	
	id : show TVDB code (required)
	link : url or magnet to get episode. Support: youtube, magnet link, torrent, direct URL to video (required)
	season : number of season
	episode : number of episode
	
	quality : link quality: 1080p, 720p o 480p (optional)
	seeders : number of seeders if link is a magnet or torrent file (optional)
	size : size del link (optional)
	
	*/
	
	// MODE 2 : other languages. External API code (recommended)
	// --------------------------------------------------------
	
	var url = 'http://tinyurl.com/k4rhzfy';
	
	request(url, function(error, response, html) {
	
		if(!error) {
			console.log(html);
		}
		else {
			var empty = [];
			console.log(JSON.stringify(empty));
		}
	});
	
	// --------------------------------------------------------
}
