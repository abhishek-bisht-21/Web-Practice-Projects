/*  Temporal Dead Zone -> The whole area before the declaration of let or const. Basically we are not allowed to use
			   our variable before it is actually declared, i.e when it is in temporal dead zone.
			   It is not an error it is just a safety measure. That jab tak apne varName ko actually
			   mein declare nhi kara tabtak aap usko use nhi krskte.

			   Cannot access varName before Initialization.
                            	
*/

// _________________________________________let___________________________________________
let varName;
console.log("at line 2", varName);
varName = 10;
varName = 20;
console.log("at line 5", varName);
// let varName -> Error (Cannot Redeclare). At the time of Hoisting and Interpreting we will find our error. Code won't run at the initial step.

// _______________________________________Const_____________________________________________

// Cannot be Reassigned or Redeclared. At the time of creation we have to put value in it.
const a = 10;
console.log(a);

// ___________________________________________Block___________________________________________

/*
Whenever a new block is encountered then a Seperate memory allocated to it. If that block has an already
declared variable name by using let ofcourse, then also it will run.

*/

let fruit = "apple";
console.log(fruit);
{	
	// console.log(fruit) -> TDZ Will throw a error
	let fruit;
	console.log(fruit);
	fruit = "orange";
	{
		console.log(fruit);
	}
	console.log(fruit);
}
console.log(fruit);


// _________________________________ Variable Shadowing____________________________________


// Valid/Legal Variable Shadowing (works with var and const as well)
let fruits = "apple";
console.log(fruits);
{
	// console.log(fruits) TDZ
	let fruits = "orange";
	console.log(fruits);

}
console.log(fruits);

// ______________________________Illegal Shadowing(Bahar kuch aur aur Block ke andar kuch aur)___________________________
let fruitss = "apple";
console.log(fruitss);
{
	var fruitss = "orange";
	console.log(fruitss);
}
console.log(fruitss)