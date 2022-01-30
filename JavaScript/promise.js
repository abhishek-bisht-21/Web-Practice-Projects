/*

It emulates the functionality that we observe when we park our car and the Parking Guy gives us some token. And Later when we return him
the token we can take our car from the parking. Similarly when we go to Burger king and order then he returns us our order token.

Similarly in the javascript there are some functions which returns us a promise which holds future value and we can get our 
desired thing using that.

There are two states or results which can be possible with a promise in real life as well, either it can be fulfilled or it can be rejected.
If it is fulfilled then we can handle it using then() and if it is rejected then catch() comes in play. Mean while when it hasn't done the given
task its result will be in "Pending State".

Request marogay toh NodeJs ke functions promise return krte hai. Ya toh woh promise fulfill krenge ya fail hojayege
We handle both the situations using then and catch

*/ 

let fs = require("fs");
// Async code
console.log("Before");

let promise = fs.promises.readFile("f1.txt");

console.log(promise); //Initial state -> Pending

// Promise Fulfilled
promise.then(function(data){
	console.log(""+data);
})
// Promise Rejected
promise.catch(function(err){
	console.log(err);
})

console.log("after");