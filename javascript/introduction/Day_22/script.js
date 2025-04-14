
// for each loop
var arr = [1, 2, 3, 4, 5];

 arr.forEach(function(value) {
    console.log(value);

})


//map filter reduce 
// map -> naya array mein returned value daalo

var arr =  [1, 2, 3, 4, 5];
var ans = arr.map(function(value) {     //create blank arr
    return 1;
})

//filter
// filter -> naye array mein true returned value daalo

var arr = [1,2,3,4,5];
var ans = arr.filter(function(value) {
    // return true;
    return value > 2;
})

//reduce
// reduce -> ek array se koi ek value banaao

var arr = [1,2,3,4];

var ans = arr.reduce(function(accumulator, key) {
    return accumulator + key;
},0)

// question -9

let numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce(function(accumulator, key) {
     return accumulator + key
},);
console.log(sum);

let sum1 = arr.reduce((acc, key) =>
 acc + key, 0);



console.log(" ")
// question - 1     

var i = 10;   // start
while(i > 0) {     //end
    console.log(i);   //code
    i--;               //change
}

console.log(" ")

// question - 2    

var i = 3;
while(i < 31) {
    console.log(i);
    i+=3;
}

console.log(" ")

// question - 3    
var sum2 = 0;
for(var i=0; i<=100; i++) {
   sum2+= i;
}
console.log(sum2);

console.log(" ");
// question-4

for(let i=1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
    stars += "*"; 
    } 
    console.log(stars);
}
   

console.log(" ");
// question-5

var str = "Priyansh";
for(var i of str) {
   console.log(i);
}

var arr = [1,1,2,4,2,2,2,1,11,1,1,1,16,6,6];
var arr2 =  [...new Set(arr)]

for (let i= 10; i >= 1; i -= 3) { 
  console.log(i);
}

let str1 = "JS";
for (let char of str1) {
console.log(char + char);
}