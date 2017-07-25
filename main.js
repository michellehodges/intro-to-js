// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: Nothing at this moment, its value is undefined.


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: The string "Tim."


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: The value has been changed from "Tim" to givenName.


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: It's set to print the string "Hello, how are you?" followed by the value of givenName.


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: The value of high minus low, in this case 40.


// 6.
// What is `math` set to?
math = high - "5";
// A: I believe this will return undefined, since we are trying to subtract a string from a number.
// A CORRECTION (I tested this theory via Devtools): math returned 45, so the function converted the string to number automatically because of some Javascript black magic.


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:
let timAge;
timAge = today - born;

// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = 'Peggy';
let instructorName = 'BenLuke';

// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:
yourName = "Michelle";
instructorName = "LukeBen";

// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber;
let myString;
let myBoolean;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A:
let myNumber = 24;
let myString = "Baby Genius";
let myBoolean = false;
let myUndefined;

// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. false;
// A CORRECTION: Looking it up - the operator == tries to convert one side of the expression to match the other, so the answer is TRUE.


// 12.
let y = (false == "");
// A. true;


// 13.
let z = (0 == "");
// A. true;


// 14.
let a = (null == null);
// A. true;


// 25.
let b = (undefined == undefined);
// A. true;


// 16.
let c = (undefined == null);
// A. true;


// 17.
let d = (null == false);
// A. true;
//A CORRECTION: False - null has been defined as having no value.

// 18.
let e = (NaN == null);
// A. true;
//A CORRECTION: False - NaN is not equal to anything.

// 19.
let f = (NaN == NaN);
// A. false;
//A CORRECTION: False - NaN is not equal to anything.

// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if (thirsty) {
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False;


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False.


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False.


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False.


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True.


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True.


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True. Curly brackets create a new object.


// 28.
if({name: "Yehuda Katz"}){ // this is called a property. 
	console.log("True!");
} else {
	console.log("False!");
}
// A: True. Curly brackets create a new object.


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True. Curly brackets create a new object.


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
