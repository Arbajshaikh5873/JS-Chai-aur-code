// Primitive:- 
// these are the datatypes which we can not directly modify
// we modify the copy of original vaue remain same 


/*  7 Types :-
String 
Number 
Boolean 
null
undefined
symbol
BigInt
*/

//reference (Non Primitive )

/*
Array 
Objects
Functions
*/

// Array:- 

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);
//object:-

let myObj = {
    name : "Arbaj",
    age : 21
}

//Function:-

const myFunction = function () {
    console.log("Hello World");  
}

/*
typeof 

null => object 

undefined => undefined

Number => number 

Arrays  =>  object

Function  =>  function

Object  =>  object

*/
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack memory is used for primitive da
// whenever we get stack memory for primitive data types at that time we get copy of the data 
//changes within the copy can not affect the original value of the data 


//heap memory is used for non primitive data types 
// whenever we get heap memory for non primitive data types at that time we get reference  of the originaldata 
//changes within the reference can change  the original value of the data 

let myYou
