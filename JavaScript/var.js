
// __________________________________ Interview Question_______________________________

// var a = 10;
// console.log("Line 5", a);
// function fn(){
// 	console.log("Line 7", a);
// 	var a = 20;
// 	a++;
// 	console.log("Line 10", a);
// 	if(a){
// 		var a = 30;
// 		a++;
// 		console.log("Line 14", a);
// 	}
// 	console.log("Line 16", a);
// }
// fn();
// console.log("Line 21", a);

//____________________________________________________________________________________________



// ____________________ALL About var_______________________

// 2015 es6 
// Hoisting


// console.log("Line no. 30", varName);
// // Declare
// var varName;
// console.log("Line no. 33", varName);
// // Assign
// varName = 10;
// console.log("Line no. 36", varName);
// // reassign
// varName = 20;
// console.log("Line no. 39", varName);
// //Redeclaring (It's value will be carry forwarded)
// var varName;
// console.log("Line no. 41", varName);



// _________________It was a function scope__________________

function fn(){
	console.log(a); // undefined
	var a = 10;
	console.log(a); //10

	if(a == 10){
		// Redeclaring -> (It's value will be carry forwarded) 
		// Memory to var a will be allocated only. It doesn't matter we redeclare it.
		var a; 
		console.log(a); //10
	}
	console.log(a); //10
}
fn();