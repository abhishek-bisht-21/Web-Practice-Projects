/*

Reason:  In the Global Execution Context the "pointer" will 1st point to a memory location in the heap at 8k
         then at 12k and finally when the latest function is created at address 16k, it will point to 16k address
	 and hence when we call the real() it will run the latest function only.

*/

function real(){ // Suppose Address 8k
	console.log("Hello I am the real one. Always Run ME !");
}

function real(){// Suppose Address 12k
	console.log("No I am the real one");
}



function real(){// Suppose Address 16k
	console.log("You both are wasted");
}

real();

console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````")

// ___________________________________________________________________________________________________________________


function real(){
	console.log("Hello I am the real one. Always Run ME !");
}

function real(){
	console.log("No I am the real one");
}

real();

function real(){
	console.log("You both are wasted");
}

console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````")

// ans)  You both are wasted

// ______________________________________________________________________________________________________

real();

function real(){
	console.log("Hello I am the real one. Always Run ME !");
}

function real(){
	console.log("No I am the real one");
}



function real(){
	console.log("You both are wasted");
}

console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````")

// _____________________________________________________________________________________________________________

// ________________Hoisting for Variables(Code chalne se pehle hi memory allocate hojati hai)_____________

console.log("a is", a);
var a;
console.log("a is", a);
a = 10;
console.log("a is", a);

console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````")

// ___________________ Hoisting for functions_________________

console.log("Before")
fn();
function fn(){
	console.log("I can be called before my declaration")
}
console.log("After")
fn();

// for function statements, the memory is allocated to them even before the code runs.

console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````")

// ___________________________________________Assignment 1 Predict the ans______________________________________

console.log("varname", varName);
var varName;
console.log("varname", varName);
varName = "Captain America"
console.log("varname", varName);

console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````")

fn();
function fn(){
	console.log("Hello I am fn");
}
fn();

console.log("`````````````````````````````````````````````````````````````````````````````````````````````````````")

fnContainer();
var fnContainer = function(){
	console.log("I am an expression")
}
fnContainer();