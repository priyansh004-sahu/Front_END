console.log("practise question 4 question")

// // calls it after 3 seconds (HOF + Callback).
function delay(fn) {
    setTimeout(fn, 3000);
}
delay(function() {
    console.log("HOF + callbacks")
})

function  delayedExecution(callback){
   setTimeout(callback, 4000);
}
delayedExecution(() => console.log("delayed exection"))


// `.map()` as a higher-order function.

var arr = [1,2,3,45,7];
function hap(arr, fnc) {
   var newarr = [];
   for(var i = 0; i<arr.length; i++) {
       newarr.push(fnc(arr[i]));
   }
   return newarr;
}
var ans = hap(arr, function (value) {
     return  value * 2; 
})

// Write a function that uses closures to create a counter.

function counter() {
    let count = 0;
     return function() {
        count++
        console.log(count);
     };
}
 let ans1 = counter();
 ans1();  // 1
 ans1();  // 2
 ans1();  // 3

//  Implement a function that limits how many times another function can be called (Closure + HOF).

function fnlimiter(fn, limit) {
    let totalcalled = 0;
    return function() {
        if(totalcalled < limit) {
            totalcalled++;
           fn();
        }
        else {
            console.error("limit exceed")
        }
    }
}

var limiter = fnlimiter(function() {console.log("priyansh"); },3);
limiter();
limiter();
limiter();
limiter();