/* The program asks the user to guess the month in which a JavaScript class starts.
 If the user guesses correctly (the month can be spelled out in full or abbreviated), 
 they will receive a "You are Right!" message.
 If the guess is incorrect, they will receive a "You are not right!" message.*/

 
// let jsStarted = prompt("In which month JS class is started" , '')
// if (jsStarted === "Jan" || "January" || "jan" || "january") {
//    alert("You are Right! 👌")
// }
// else  {
//     alert("You are not right ! 😒")
// }


/* The program prompts the user to enter their name and password.
The user is then asked to confirm their password by entering it again. 
If the password matches the confirmation, the user is greeted with a welcome message. 
If the passwords do not match, the user is prompted to log out.
After the initial check, the program checks if the password matches a pre-defined value
"new123". If it matches, the user is welcomed with a personalized message. 
 If it does not match, the user is informed that they have entered the wrong password.*/ 

 
// let user = prompt("Please Enter your name ",'')
// let password = prompt(`Dear ${user} please enter your password`, "")
// let confirmPassword = prompt(`Dear ${user} please enter your password again`, "")

// let msg = password === confirmPassword ? alert(`Welocme ${user}`) : alert(`Log Out`)

// let checkPassword = password === "new123" ? alert(`you are welcome ${user}`) : alert(`${user} you entered wrong pass: ${password}`)



// let user = prompt("Please Enter your name ",'')
// let password = prompt(`Dear ${user} please enter your password`, "")
// let confirmPassword = prompt(`Dear ${user} please enter your password again`, "")

// let msg = password === confirmPassword ? alert(`Welocme ${user}`) : alert(`Log Out`)

// let checkPassword = password === "new123" ? alert(`you are welcome ${user}`) : alert(`${user} you entered wrong pass: ${password}`)

/* The program checks if a student is eligible for admission to a CSS program based on 
their age and academic performance. To be eligible, the student must be between the 
ages of 18 and 24, and have a minimum academic performance of 80%. However,
 if the student is under 18, they may still be eligible if their academic performance is
  exceptional (90% or higher). */

// age = 15;
// per = 41;

// if (age >= 18 && age <= 24 && per >= 80 ) {
//     alert("You are eligible for css")
// } 
// else if (age >= 16 && age <=24 && per >= 90){
//     alert("You are underage but eligible due to your exceptional performance")
// }
// else {
//     alert("you are not eligible")
// }



1- Check Status and alert message

// let login = prompt("Enter your Status", "");

// (login == "Employee") ? alert("Hello") :
// (login == "Director") ? alert("Greetings") :
// (login == "") ? alert("NO login") : alert("Invalid status");


// if (login == 'Employee') {
//     alert('Hello')
// } else if (login == 'Director') {
//     alert('Greetings')
// } else if (login == '') {
//     alert('NO login')
// } else {
//  alert("Invalid status")
// }


// 2. Write a js program to find maximum between two number.

// let a = 10;
// let b = 20;

// switch (true) {

//     case a > b:
//         console.log("a is greater than b");
//         break;
//     case a < b: 
//     console.log("a is less than b");
//     break; }


// if (a>b) {
//     console.log("a is greater than b");
// }
// else {
//     console.log("b is greater than a");
// }

// let greater = Math.max(a,b)
// console.log(` The Greate number is ${greater}`) 


// let greater = a > b ? alert(a) : alert (b);




// 3. Write a js program to find maximum between three numbers.


// let a = 90;
// let b = 20;
// let c = 190;

 

// (a > b && a > c)? alert(a) :
// (b > a && b > c)? alert(b) : alert(c);


// if ( a >= b && a >=c) {
//     console.log(`a: ${a} is grater the b: ${b} and c: ${c}`);
// } else if ( b >= a && b >= c) {
//     console.log(`b: ${b} is grater the a: ${a} and c: ${c}`);
// } else  {
//     console.log(`c: ${c} is grater the a: ${a} and b: ${b}`);
// }


// let greater = Math.max(a,b,c)
// console.log(` The Greate number is ${greater}`) 




