// let x = 0; // False
// let y = 1; // True

// x = !x;
// console.log(typeof x,x); 

// y = !y;
// console.log(typeof y,y);

// if (x) 
// if (true) { 
//     console.log("Hello");
// }

// if (y)
// if (false) {
//     console.log("World");
// }

// let x = 1;
// let y = 0;

// if (x || y) {
//     console.log("Or Condition");
// }

// if ( x && y) {
//     console.log("And Condition");
// }

// if (!x || y) {
//     console.log("Or Condition");
// }

// if ( x && !y) {
//     console.log("And Condition");
// }

// let num1 = 500;
// let num2 = 100;

// if (num1 > num2) {
//     alert("num1 is greater than num2");
// }

// if(num1 > num2) {
//     alert("num1 is greater than num2");
// }
// else {
//     alert("num1 is less than  num2");
// }


// let n1= 60;
// let n2= 50;
// let n3= 40;

   
// if(n1 > n2 && n1 > n3) { // 1 ,true && 1, true
//     alert("n1 is greater than n2 and n3");
// }        
// else if ( n2 > n1 && n2 > n3)   {    // false && true
//     alert("n2 is greater than n1 and n3");
// } else {
//     alert("n3 is greater than n1 and n2");
// }


// let num1 = 20;
// let num2 = 50;

// (num1 > num2) ? alert("num1") : alert("num2")

// if(num1 > num2) {
//     alert("num1 is greater than num2");
// }
// else {
//     alert("num1 is less than  num2");
// }

// let login = prompt("Enter your Status", "");
// if (login == 'Employee') {
//     alert('Hello')
// } else if (login == 'Director') {
//     alert('Greetings')
// } else if (login == '') {
//     alert('NO login')
// } else {
//  alert("Invalid status")
// }

// let login = prompt("Enter your Status", "");

// (login == "Employee") ? alert("Hello") :
// (login == "Director") ? alert("Greetings") :
// (login == "") ? alert("NO login") : alert("Invalid status");

// let a = "Umair"
// let b = ""


// if (a || b) {
//     console.log("TRUE on OR condition")
// }
// if (a && !b) {
//     console.log("TRUE on AND condition")
// }



/*1- The program asks the user to guess the month in which a JavaScript class starts.
 If the user guesses correctly (the month can be spelled out in full or abbreviated), 
 they will receive a "You are Right!" message.
 If the guess is incorrect, they will receive a "You are not right!" message.*/

 let jsStartMonth = prompt("Guess the month in which a JavaScript class starts", "");
 if (jsStartMonth == "January" || jsStartMonth == "january" || jsStartMonth == "Jan" || jsStartMonth == "jan")
   {
     alert("You are Right!");
 } else {
        alert("You are not right!");
    }


 /*2- The program prompts the user to enter their name and password.
The user is then asked to confirm their password by entering it again. 
If the password matches the confirmation, the user is greeted with a welcome message. 
If the passwords do not match, the user is prompted to log out. */


/*3- The program checks if a student is eligible for admission to a CSS program based on 
their age and academic performance. To be eligible, the student must be between the 
ages of 18 and 24, and have a minimum academic performance of 80%. However,
 if the student is under 18, they may still be eligible if their academic performance is
  exceptional (90% or higher). */
