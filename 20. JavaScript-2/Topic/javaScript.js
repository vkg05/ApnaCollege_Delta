// // if else

// let age = 23;
// if(age >= 18){
//     console.log("you can vote");
// }
// else if(age < 18) {
//     console.log("you cannot vote");
// }



// //grade system 

// let marks = 40;
// if(marks >= 80){
//     console.log("A+");
// }
// else if (marks >= 60){
//     console.log("A");
// }
// else if (marks >= 33){
//     console.log("B");
// }
// else{
//     console.log("F");
// }



// // nested if-else

// let num = 15;

// if(num >= 33){
//     console.log("Pass");
//     if(num >= 80){
//         console.log("Grade : 0");
//     } else{
//         console.log("Grade : A");
//     }
// } else{
//     console.log("Better luck next time!");
// }



// logical operators

// let marks = 40;

// if (marks >= 33 || marks >= 80){
//     console.log("Pass");
//     console.log("A+");
// }

// if((marks >= 33 && marks <= 80) || !false){
//     console.log("PASS");
// }




// truely or falsey

// if(" "){
//     console.log("it has true value.");
// } else{
//     console.log("it has false value.");
// }



// switch operator

// let color = "yellow";

// switch (color) {

//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken Light");
    
// }



// alert

// alert("Something is wrong!")
// console.log("this is a simple log");
// console.error("this is an error msg")
// console.warn("this is an error msg")

// prompt

// let roll = prompt("Enter your Roll Number :");
// console.log(roll);

let firstName = prompt("Enter First Name:");
let lastName = prompt("Enter the Last Name:")
let msg = "welcome " + firstName +" "+ lastName + " !"
alert(msg)

