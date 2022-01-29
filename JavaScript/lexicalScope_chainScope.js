
// Comment others while running.
// _______________________ Interview question_________________________

console.log("Line Number 5", varName);
var varName = 10;

function b(){
	console.log("Line number 9", varName);
}

console.log("line Number 12", varName);
function fn(){
	console.log("Line number 14", varName);
	varName = 20;
	b();
	console.log("Line Number 17", varName);
}

fn();

console.log("````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````")

// ___________________________________________________________________________________________

/* Whenever a function is called, then its own execution context is made. In the execution context
    Global is passed on, and this is calculated and also the mermory is allocated for variables 
    which are present inside that function.	

    Execution context is created inside CallStack. At theBottom of the CallStack we have Global
    Execution Context, which is for everything which is outside a function.

    Scope -> The area where a function or a variable can be found.

    Lexical Scope -> In lexical scope for a function , We lool outside the function definition and not outside the function call.
*/

console.log("line 32", vName);
var vName = 10;
console.log("line number 34", vName);
function fn(){
	console.log("line number 5", vName);
	var vName = 20;
	function b(){
		console.log("Line 41", vName);
	}
	b();
	console.log(vName);
}
fn();

console.log("````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````")

// ___________________________________________Interview question_________________________________________________



console.log("Line Number 58", varname);
var varname = 10;
//function b definition
function b(){
	console.log("Line number 62", varname);
}

console.log("line Number 65", varname);
function fn(){
	console.log("Line number 67", varname);
	varname = 20;
	b();
	console.log("Line Number 70", varname);
}

fn();

console.log("````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````")