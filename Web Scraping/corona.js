const request = require('request');

console.log("before")
request('https://www.worldometers.info/coronavirus/', cb)

console.log("after")



function cb(error, response, html) {

	if (err) {
		console.error('error:', error); // Print the error if one occurred

	} else {
		console.log('html:', html); // Print the HTML for the Google homepage.

	}

}