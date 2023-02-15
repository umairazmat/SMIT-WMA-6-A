// Problem Solving

// 1. Write a js program to find maximum between two numbers(take input from user) using conditional operator.

// 2. Write a js program to find maximum between three numbers using conditional operator.

// 3. Write a js program, to check weather number is int or not.

// 4. Write a js program, to check weather number is string of not. hint use tyepof

























// 1. Write a js program to find maximum between two numbers(take input from user) using conditional operator.

var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));

if (num1 > num2) {
console.log("The maximum number is: ", num1);
}
else {
console.log("The maximum number is: ", num2);
}


// 2. Write a js program to find maximum between three numbers using conditional operator.

var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));
var num3 = parseInt(prompt("Enter third number: "));

if (num1 > num2 && num1 > num3) {
console.log("The maximum number is: ", num1);
}
else if (num2 > num1 && num2 > num3) {
console.log("The maximum number is: ", num2);
}
else {
console.log("The maximum number is: ", num3);
}

// 3. Write a js program, to check weather number is int or not.
  var num = prompt("Enter a number");
  if (Number.parseInt(num)) {
     console.log( num," is an integer" );
  }
  else {
     console.log( num," is not an integer" );
 }


// 4. Write a js program, to check weather number is string of not.
var num = prompt("Enter a value: ");

if (typeof num === "string") {
console.log(num, "is a string");
}
else {
console.log(num, "is not a string");
}