
/*
To make it Global

1) process.cwd() -> Jahan isko run karoge vahan ka path apne aap pick krlega.
2) Shebang syntax is used to make anything global. If we want anything to be present in the command line.
3) We also have to npm link it. (npm init -y) and (npm link) commands have to be used.
*/ 


let fs = require("fs");
let path = require("path")
let helpObj = require('./commands/help')
let organizeObj = require('./commands/organize')
let treeObj = require('./commands/tree')

let inputArr = process.argv.slice(2);
console.log(inputArr);

let types = {
	media:["mp4", "mkv", 'jpeg', 'jpg'],
	archives: ['zip', '7z','rar','tar', 'gz', 'ar','iso', 'xz'],
	documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'torrent', 'pptx'],
	app: ['exe', 'dmg', 'pkg', 'deb']
}

// __________________________________________Commands to Run this code____________________________________________________
// node main.js tree "directoryPath"
// node main.js organise "directoryPath"
// node main.js help 

let command = inputArr[0];

switch(command){
	 case "tree":
		 treeObj.treeKey(inputArr[1])
		 break;
	
	case "organize":
		organizeObj.organizeKey(inputArr[1])
		break;
	case "help":
		helpObj.helpKey()
		break;
	default: 
		console.log("Please input write command");
		break;
}


