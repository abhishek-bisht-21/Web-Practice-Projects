
/*
To make it Global

1) process.cwd() -> Jahan isko run karoge vahan ka path apne aap pick krlega.
2) Shebang syntax is used to make anything global. If we want anything to be present in the command line.
3) We also have to npm link it. (npm init -y) and (npm link) commands have to be used.
*/ 


let fs = require("fs");
let path = require("path")

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
		 treeFn(inputArr[1])
		 break;
	
	case "organize":
		organizeFn(inputArr[1])
		break;
	case "help":
		helpFn()
		break;
	default: 
		console.log("Please input write command");
		break;
}


function treeFn(dirPath){
		
	if(dirPath == undefined){
		console.log("Kindly enter the path");
		return;
	} else{
		let doesExist = fs.existsSync(dirPath);
		if(doesExist){
			treeHelper(dirPath,"");

		}else{
			console.log("Kindly enter the correct path");
			return;
		}
	}
}

function treeHelper(dirPath, indent){
	// is file or folder
	let isFile = fs.lstatSync(dirPath).isFile()

	if(isFile == true){
		let fileName = path.basename(dirPath)
		console.log(indent  + "|-- " + fileName)	
	}else{
		let dirName = path.basename(dirPath)
		console.log(indent  + "|__ " + dirName)	
		let children  = fs.readdirSync(dirPath)
		
		for(let i=0;i<children.length;i++){
			let childPath = path.join(dirPath,children[i]);
			treeHelper(childPath,indent + "\t")
		}
	}
}

function organizeFn(dirPath){
	// console.log("organize command Implemented for ", dirPath);

	let destPath;
	// 1) input -> directory path given.	
	if(dirPath == undefined){
		console.log("Kindly enter the path");
		return;
	} else{
		let doesExist = fs.existsSync(dirPath);
		if(doesExist){
			// 2) create -> organized_files -> directory
			destPath = path.join(dirPath, "organized_files");
			// Create organise_files only when it is not created before
			if(fs.existsSync(destPath) == false){
				fs.mkdirSync(destPath);
			}	

		}else{
			console.log("Kindly enter the correct path");
			return;
		}
	}

	organizeHelper(dirPath,destPath);
	
}

// 3) identify categories of all the files present in that input directory -> 
function organizeHelper(src,dest){

	let childNames = fs.readdirSync(src);
	// console.log(childNames);
	for(let i=0;i<childNames.length;i++){
		// Creating the address for each file.
		let childAddress = path.join(src,childNames[i]);

		// check if it is file or folder
		let isFile = fs.lstatSync(childAddress).isFile();
		if(isFile){
			// console.log(childNames[i]);

			// To identify to which category does the file belong to
			let category = getCategory(childNames[i]);

			// console.log(childNames[i], "belongs to ---> ", category);

			// 4) copy/cut files to that organized directory inside any of the category folder.
			sendFiles(childAddress,dest,category);

		}
	}
}

function getCategory(name){
let ext = path.extname(name);
ext = ext.slice(1); // seperating the dot from the extension name

// Searchinh in the types object
for(let type in types){
	let currtypeArray = types[type]; // -> currTypeArray can have values => media, archives,document,app
	for(let i=0;i<currtypeArray.length;i++){
		if(ext == currtypeArray[i]){
			return type;
		}
	}
	
}

return "others";
// console.log(ext);
// return ext;
}

function sendFiles(srcFilePath, dest, category){

	let categoryPath = path.join(dest, category);
	if(fs.existsSync(categoryPath) == false){
		fs.mkdirSync(categoryPath); // Creating a file specifically for a extension type
	}

	let fileName = path.basename(srcFilePath);
	let destFilePath = path.join(categoryPath,fileName)
	fs.copyFileSync(srcFilePath,destFilePath) // copying the files into destFilePath
	fs.unlinkSync(srcFilePath) // deleting the copied files. To give a feel of cutting the pasting.

}

function helpFn(){
	console.log(`
	List of All Commands
	node main.js tree "directoryPath"
	node main.js organise "directoryPath"
	node main.js help 	
	
	`);
}