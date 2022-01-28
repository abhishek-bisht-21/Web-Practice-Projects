const request = require('request');
const cheerio  = require('cheerio');



console.log("before")

request('https://www.worldometers.info/coronavirus/', cb)

console.log("after")



function cb(error, response, html) {

	if (error) {
		console.error('error:', error); // Print the error if one occurred

	} else {
		
		handleHtml(html);

	}

}

// Callback function
function handleHtml(html){

	// Just CSS Selector Cheerio also has selectors to select specific html from the page
	let selectorTool  = cheerio.load(html);
	// let h1s = selectorTool("h1");
	// console.log(h1s.length);

	// After finding out the specific selectors, having specific info
	let ContentArr = selectorTool("#maincounter-wrap span");

	// for(let i=0;i<ContentArr.length;i++){
	// 	let data =  selectorTool(ContentArr[i]).text();
	// 	console.log(data);
	// }

	// It is neccessary to again wrap it with selectorTool to get the desired text
	let total_Cases = selectorTool(ContentArr[0]).text();
	let total_Death = selectorTool(ContentArr[1]).text();
	let total_Recovered = selectorTool(ContentArr[2]).text();

	console.log("Total Cases -> " + total_Cases)
	console.log("Total Deaths -> " + total_Death)
	console.log("Total Recovered -> " + total_Recovered)


}