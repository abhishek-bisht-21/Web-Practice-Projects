let fs = require("fs");
let path = require("path")

function helpFn(){
	console.log(`
	List of All Commands
	node main.js tree "directoryPath"
	node main.js organise "directoryPath"
	node main.js help 	
	
	`);
}


module.exports = {
	helpKey : helpFn
}