

//  Types of functions


// function delfinition. function is the keyword and name of the function is sayHello
function sayHello(param){  
	console.log("Hello", param);
}


// We can pass anything in the function parameter (array, function,string, boolean,number)

// ______________________Function invocation_______________________
sayHello();
console.log('`````````````````````````````````````');
sayHello("Hello")
console.log('`````````````````````````````````````');
sayHello([1,2,3,4,5])
console.log('`````````````````````````````````````');
sayHello({name : "abhishek"})
console.log('`````````````````````````````````````');
let rVal = sayHello();
console.log("rVal", rVal);
console.log('`````````````````````````````````````');

// Functions are First class Citizen means that functions can be treated as variables. This is means that
// Assignment of a function as an variable is possible. Basically with this we mean that we can put the 
// functions address in a different variable.

// ___________________________________Function Expression________________________________________

let fnContainer = function(){ // Cause name is not provided
	console.log("I am Expression");
	console.log("I am an anonymous function")
}
fnContainer(); // We can access the function using fnContainer



// _____________________________IIFE -> Immediately Invoked Function expression_____________________

// We can call a function immmediately after it is made. We dont need to run it explicitly
(function fn(){
	console.log("I am an IIFE")
	console.log("I run on my own")
})();

// ____________________________ _____Arrow Function______________________________________________

// Use Case -> To make the syntax smaller, used in react extensively, this
let fn = (num)=>{
	return num*num
}

console.log(fn(5))

// ______________________________ Higher Order Functions ____________________________________

/*

	Functions are first class Citizens, functions are treated as a variable.
	1) assignment -> fn expression variable can be passed as a parameter.
	2) function can be passed as a parameter.
	3) Callbacks and Higher Order functions
	4) We can also return a function from a function
	5) closure

*/

console.log('`````````````````````````````````````');

function sayhi(param){
	console.log("hi", param);
	param();
	return "wassup";
}

// address
function smaller(){
	console.log("Hello i am smaller")
}

// sayHi([1,2,3,4,5])
let rval = sayhi(smaller)
console.log(rval)


function outer(){
	console.log("I am outer returning inner");
	return function inner(){
		console.log("I am inner function");
	}
}

let rValue = outer();
console.log("Returned Value from outer function", rValue)