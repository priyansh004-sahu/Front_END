
console.log("hello world");
console.warn("hello world");
console.error("hello world");
console.table({name: "priyansh", age: 21})  

var result  = 35 * 2  - (10/2) + 7;
console.log(result);

console.log(typeof 123);
console.log(typeof "nisha");
console.log(typeof true);
console.log(typeof "nisha");
console.log(typeof "nisha");

var a = 12;
var b = 13;
var c;

c = a;
a = b;
b = c;
console.log(a,b);

var a = 18;
var b = 70;
[a,b] = [b,a];

var a = 12;  //25, 13
var b = 13; // 12

a= a + b;  
a = a - b;
b = a- b;

console.groupCollapsed("ajj maeri shadi aha");

console.groupCollapsed("ajj maeri shadi aha");
    console.log("nisha le saath");
    console.log("please bholebaba soh lo");
     console.log("please bholebaba soh lo");
console.groupEnd();
    console.log("nisha le saath");
    console.log("please bholebaba soh lo");
    console.log("please bholebaba soh lo");
console.groupEnd();


// variable and datatypes

const obj = {
    name: "priyansh",
    soupose: "nisha",
    age: 21,
}
obj.age = 20;
console.log(obj);
Object.freeze(obj);
obj.age = 200;
console.log(obj);

let str = "50";

// Method 1: Using Number()
let num1 = Number(str);
console.log(num1, typeof num1); // 50 "number"

// Method 2: Using parseInt()
let num2 = parseInt(str);
console.log(num2, typeof num2); // 50 "number"

// Method 3: Using Unary `+` Operator
let num3 = +str;
console.log(num3, typeof num3); // 50 "number"

let str1 = "JavaScript";
console.log(str1.indexOf('Script') !== -1);


let str2 = "JavaScript";

if(str2.indexOf("script") == -1) {
console.log(false);
}
else{
console.log(true);
}

var d; // undefined ayega
console.log(d);

var d = null;  // null
console.log(d);

console.log("priyansh" * 1);   // not a number


// question - 9

var arr = [1, 2, 3, 4, 5];

var ans = arr.reduce(function(accumulator, key) {
     return accumulator + key
},0)