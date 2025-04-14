function abcd() {
    console.log("hello world");
}
abcd();

function greet(n) {
    console.log(n);
}
greet("hello");
greet("ludo");
greet("chutiya");

function xyz(a, b, c, d) {
    console.log(a+b+c+d);
}
xyz(1, 2, 3, 70);

function number(a, b, c, d) {   //function statement
    console.log(a, b, c, d)
}
number(1, 2, 3);

//var abc = function() {
      //function expression
//};

// function() {
//     anonymous function
// }

//fat arrow function
// ()=>{

// }

//fat arrow with one parmeter

let abcd1 = (a) => {
    console.log(a);
}  
abcd1(12);

//fat arrow with implicit return

function abcd2() {
   return 13;
}var ans = abcd2();

var abcd3 = () => "priyansh";
var ans = abcd3();

// rest parameter ....

function abcd4(a, b, c,...rest) {
    console.log(a, b, c, rest);
}
abcd4(1, 2, 3, 4, 5, 6, 7);