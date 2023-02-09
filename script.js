// my current age
const myAge = 23

//the value saved to this variable will change
let earlyYears = 2
earlyYears *= 10.5;

let laterYears = myAge - 2;
laterYears *=4;

//this is your age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//your name as a string, call its built-in method
const myName = 'Zee Linski'.toLowerCase();

//displays your name and age in dog years with string interpolation to display the value
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)