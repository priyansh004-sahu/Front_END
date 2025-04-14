 // what is array
// array is a data structure which can store multiple values all at one place

 // why array ek se jaada values store krne k liye
 // who uses array -> devs
 // when to use array -> whenever you need to store multiple values
 // where to use array -> in the js code
 // how to use array

 //how to create array -> []
//how to access members of array

let arr = [1, 2, 3, 4];
console.log(arr[2]);

var array = [];
var arr2 = new Array();
arr2[0] = 23;
arr2[1] = 23;

// ek black arr
var arr2 = [];

// ek array banao of 5 size ka
var arr2 = [1, 2, 3, 4, 5];

// ek arr bano  100 size ka

var arr2 = new Array(100);
// arr2[5] = 89;

var arr2 = new Array(30);
for(var i=0; i<30;i++) {
    arr2[i] = i;
}

// js mein arrays mein hum log ek se jaada values store to kr skte hai par chaahe to alag data type ki
//  value bhi store kr skte hai
 // homogeneous -> same type values
 // homogeneous nahi hota hai array js mein jiska matlab hai you can store multiple type of values in an array 
 var arr2 = [1, "priyanhs", function() {}, {}, [], undefined];

 //object

 var obj = {};
 // what is object -> sirf ek tareeka hai key value pairs ko hold krneka,  key value pair

// why object  --> jab bhi apko ek  se jayda  value  ko  " ek  hi element le baare me store krna ho"
 // when to make an object  --> when you want to store  the info  of one entity
 //  // how to create an object
// how to access an object

var obj = {
    //  property: Value

    name: "priyansh",
    age: 21,
    email: "test2GMAIL.COM",
    contact: 834802729
};
console.log(obj.name)
var obj  = {};
var obj = new Object();