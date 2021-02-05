//noob revising 5/2/2021

console.log("hello");
// in line comment
/* multi line
comment */


var name = "jim";
let a=3;
const pi = 3.14;

console.log(pi);

var thisVar;
var ThisVar; //casesensitive

var sum = 10 + 10;
var diff = 10 - 10;
var multiply = 10 * 10;
var divide = 66 / 33;

var increment = 1;
increment++;
increment--;

var decimal = 5.3;

var remainder;
remainder = 11 % 3; //determine odd or even numbers

a = a + 2;
a += 2;
a -= 2;

var string = "I am \"double quote string"; //escape
var string = 'I am \double quote string'; //or `

var lengthString = string.length; // length of string
var firstLetter = string[0]; // first in string
var lastLetter = string[string.length -1];

//string is immutable

var array = ["John", 23];
var nestedArray = [["John",23],["Jim", 22]];

console.log(array[0]);
array[1] = 24;
console.log(array[1]);
console.log(nestedArray[1][0]);

array.push(["dog", 24]); //masuk
console.log(array);

array.pop(); //buang
console.log(array);

array.shift() // buang depan
array.unshift("Masuk"); //masuk depan
console.log(array)

function thisFunction(a,b) {
    console.log("hello")
    console.log(a -b);
}

thisFunction(10,2);
 
function nextInLine(arr, num){
    arr.push(num);
    return arr.shift();
}

test = [1,2,3,4,5];

console.log(JSON.stringify(test));
nextInLine(test,6);
console.log(JSON.stringify(test));

function ifElse(){
    if ( 2 != 2 && 2 == 2) { // == 
        return "this is correct";
    } else if (2 != 2){
        return "this is wrong";
    } else {
        return "never ran";
    }
}

console.log(ifElse());
console.log(3 == "3"); //convert datatype or !=
console.log(3 === "3"); //does not convert datatype or !==

