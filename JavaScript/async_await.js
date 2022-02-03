
// Order a Drink and Deliver it if it is a Coffee.
// Promise Based Code
function placeOrder(drink){
	return new Promise(function(resolve,reject){
		if(drink == 'coffee'){
			resolve("Order PLaced !!");
		}else{
			reject("Sorry, We only Serve Coffee");
		}
	})
}

function processOrder(order){
	return new Promise(function(resolve){
		console.log("Order is being processed")
		resolve(`Coffee served for the ${order}`)
	})
}

// placeOrder('coffee').then(function(orderFromCustomer){
// 	console.log("Request Recieved")
// 	let orderIsProcessed  = processOrder(orderFromCustomer);
// 	return orderIsProcessed
// }).then(function(orderIsProcessed){
// 	console.log(orderIsProcessed)
// }).catch(function(err){
// 	console.log(err)
// })



// Async Await code to handle same situation 

async function serveOrder(){

	try {

	const orderRecieved = await placeOrder('coffee')
	console.log(orderRecieved)
	const processedOrder = await processOrder(orderRecieved)
	console.log(processedOrder)
		
	} catch (error) {
		console.log(error);
	}


}

serveOrder();