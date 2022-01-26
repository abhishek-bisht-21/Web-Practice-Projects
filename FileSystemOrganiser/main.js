
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
	console.log("Tree command Implemented for ", dirPath);
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
		let childAddress = path.join(src,childNames[i]);

		// check if it is file or folder
		let isFile = fs.lstatSync(childAddress).isFile();
		if(isFile){
			// console.log(childNames[i]);
			
			let category = getCategory(childNames[i]);
			console.log(childNames[i], "belongs to ---> ", category);

			// 4) copy/cut files to that organized directory inside any of the category folder.
			sendFiles(childAddress,dest,category);

		}
	}
}

function getCategory(name){
let ext = path.extname(name);
ext = ext.slice(1);

for(let type in types){
	let currtypeArray = types[type];
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
		fs.mkdirSync(categoryPath);
	}

	let fileName = path.basename(srcFilePath);
	let destFilePath = path.join(categoryPath,fileName)
	fs.copyFileSync(srcFilePath,destFilePath)

}

function helpFn(){
	console.log(`
	List of All Commands
	node main.js tree "directoryPath"
	node main.js organise "directoryPath"
	node main.js help 	
	
	`);
}