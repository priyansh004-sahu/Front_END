// // // question_1

// // let z = Number(prompt("enter your age"));

// // if(z < 18){
// //     console.log("you are minor");
// // }
// // else if(z <= 60){ 
// //     console.log("you are an adult");

// // }else{
// //     console.log("you are senior citizn");

// // }
// // // question_2

// // let num1 = parseInt(prompt("enter first number"));
// // let num2 = parseInt(prompt("enter second number"));

// // let sum = num1 + num2;  

// // if(sum % 2 == 0) {
// //     console.log("even sum");
// // } else {
// //     console.log("odd sum");
// // }
// // // question_3


// // let char = prompt("enter  a single character");

// // if(char.length === 1) {
  
// //     if(char >= "A" && char <= "Z"){
// //         console.log("upper case letter"); 
// //     } else  if(char >= "a" && char <= "z") {
// //         console.log("lower case letter");     
// //     } 

// //    }else{
// //     console.log("please enter a single charcter");
// // }

// // question_4

// let a = Number(prompt("Enter the first number"));
// let b = Number(prompt("Enter the second number"));
// let c = Number(prompt("Enter the third number"));

// let largest;

// if (a >= b && a >= c) {
//     largest = a;
// } else if (b >= a && b >= c) {
//     largest = b;
// } else {
//     largest = c;
// }

// console.log("The largest number is:", largest);

// question_5

// let year = Number(prompt("enter a checkif it leap year"));

// if((year % 4 ===  0 && year % 100 !==0) || (year % 400 === 0)) {
//     console.log(year + " is a leap year");
// } else{
//     console.log(year + " is Not a leap year");

// }

// //question_6

// let num1 = Number(prompt("enter a nummber"));
// let num2 = Number(prompt("enter a nummber"));
// let operator = prompt("enter an opeartor")

// let result;
// if(operator === "+") {
//     result = num1 + num2
// }else if(operator === "-") {
//     result = num1 - num2;
// }else if(operator === "*") {
//     result = num1 * num2;
// }else if(operator === "/") {
 
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Error! Division by zero is not allowed.";
//     }
// } else{
//     result =  "Invalid operator! Please enter +, -, *, or /.";
// }
// console.log("Result:", result);

//question_7

// let number = Number(prompt('enter a number'));

// if(number > 0) {
//     console.log("the number is positive");
// } else if(number < 0) {
//     console.log("the number is negative");
// } else{
//     console.log("the number is zero")
// };

// question_8

// let name = prompt("enter your name");
// let time = prompt("enter the current time ");

// if(time  >= 5 && time < 12) {
//     console.log(" good morning" + name + "!");
// } else if(time >=12 && time  < 17) {
//     console.log(" good afternoon" + name + "!");
// } else if(time >= 17 && time < 21) {
//     console.log(" good evening" + name + "!");
// } else{
//     console.log(" good night" + name + "!");
// }

// question_9

let sign = prompt("enter your signle name");
if(sign === "red") {
    console.log("stop");
} else if(sign === "yellow") {
    console.log("Get ready");
} else {
    console.log("Go");
}

let x;
console.log(x + 2);