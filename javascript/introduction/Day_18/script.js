// iife => immediately invoked function expression

(function abcd() {
    console.log("priyansh");
})();

(function abcd() {
    var a = 12;
    console.log(a);
    // return a;
})();

var ans = (function abcd() {
     var a = 23;

     return {
        set: function(val){
            a = val;
        },
        get: function() {
            console.log(a);
        },
     };
})();
ans.set("56")
ans.get();

var shery = (function sherylibrary() {
    
    return{
        imageeffect: function() {
           console.log("imageeffect");
        },
        mousefollower: function() {
             console.log("mousefollwer");
        },
    };
})();
shery.imageeffect();
shery.mousefollower();

//hofs => high order function  first type retrn the func
(function  abcd() {
     return function(){
          console.log("rizwan");
          return function(){
            console.log("virat");
       }
     };
})()()();

// second type retrn the parameter

function  abcd(func) {
    func();
}
abcd(function() {
      console.log(" hi with  priyansh");
});

//callback function

function abcd(val) {
    console.log("Inside abcd function");
    val();  // Calling the callback function
}

// Passing an anonymous function as a callback
abcd(function() {
    console.log("Goodbye!");
});


//First class function

const sayHello = function() {
   return 'hello this first class func';
}
console.log(sayHello());

//pure function
function add(a,b) {
    return a  + b;
}
console.log(add(2, 3));

// impure function

let  total = 1;
function addToTotal(a) {
    total += a;   //modifies eternal variable
}
addToTotal(9);
console.log(total); 

// global scope

let globalvar = 'hello';
function show(){
    console.log(globalvar);
}

//function scope

function example() {
    let localvar = 10;
}
console.log(localvar);

//closure function

function abcd() {
    var a = 13;
    return function() {
        console.log(a);
    }
}
var ans =  abcd();
ans();

function outer (x) {
  return function inner(y) {
        return x + y;
    };
}
const addfive = outer(5);
console.log(addfive(10));