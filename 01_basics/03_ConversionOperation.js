let score = "33abc";//this is not a number this is strinng 

console.log(typeof score);//string 

let valueInNumber = Number (score)//string is converte into number data type 
console.log(typeof valueInNumber);//number 
console.log(valueInNumber);//NaN(Not a number )
/*if the vlue of score is undefined 
i.e. let score = undefined;
then also op of console.log(valueInNumber); is Nan
*/

//"33" => 33
//"33abc" => NaN 
//undefined => NaN 

let isLoggedIn = 1;


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
op of console.log(booleanIsLoggedIn); when the value of let isLoggedIn   is 

let isLoggedIn = 1 => true

let isLoggedIn = 0 => false

let isLoggedIn = null => false

let isLoggedIn = "" => false


let isLoggedIn = "hitesh" => true

*/


// conversion into the string 

let someNumber = 33

let stringNumber = String (someNumber)

console.log(typeof stringNumber);//string 
console.log(stringNumber);//"33"



//  **************************************************** Operations ****************************************************

let value = 3
let negValue = -value
console.log(negValue);

/* 
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3); ***this gives us the power (2 raise to the power 3)
console.log(2%2); ***this gives us remainder
*/

