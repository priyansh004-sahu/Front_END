

// CAN YOU EXPLAIN WHAT IS HIGHER ORDER
// FUNCTIONS ?
// Higher Order Functions Are The Functions Which Accept A
// Function In A Parameter Or Return A Function Or Both.
// Imp For Example : ForEach Method Always Takes Another Function Inside It,
// So ForEach Is A Higher Order Function
function abcd(val) {
     val();
  
}
abcd(function() {console.log("high order func")})

//construtor fnctionn

// Any Normal Function In Js Which Whenever Called With "New"
// Keyword, Returns An Object, If We Use “This" Keyword Inside That
// Function, It Returns An Object With All Of The Properties And
// Methods Mentioned Inside That Function With This Keyword, Such
// Function Is Called Constructor Function.

function saanchaOfBiscuit() {
     this.width = 12;
     this.height = 32;
     this.name = "parle";
     this.color = "brown";
}
var bis1 = new saanchaOfBiscuit();
var bis2 = new saanchaOfBiscuit();
var bis3 = new saanchaOfBiscuit();

// iife
// IIFEs Are Commonly Used To Create A Private Scope For Your
// Code, So That Variables And Functions Defined Inside The

// IIFE Are Not Accessible From Outside The IIFE.
var ans = (function(){
    var privateval = 12;
    
    return {
        getter: function(){
        console.log(privateval);
        },

        setter: function(val){
        privateval = val;
        }
      }
})();
ans.getter();  // Output: 12
ans.setter(50);
ans.getter();  // Output: 50


// this is a private variable we can
// not access it outside or via
// console


//prototype
// javascript by default adds a property called
// [[prototype]] to every object, so if you ever see
// any object, you can blindly say that object
// contains prototype, so now, what does it contain ?

//prototype inheritence

var human = {
     name: "priyansh",
     cantalk: true,
     canfly: false,
     canwalk: true,
     canhaveemotion: true,
     havefourleg: false
}
var sheriyansStudent = {
       solvequestion: true,
       createModernWebsite: true,
       buldworldclasswebsite: true,
}
sheriyansStudent.__proto__ = human;

//this keyword  => this keyword is a special keyword in JavaScript which changes 
// it's value in different context.

console.log(this);  //check for local and global scope

//method scope => ek function jo object ke ander ho, usae method khhate hai

var object = {
     baatKaro: function() {   ///method baan choka ha
          console.log(this);
     }
}
object.baatKaro();

//event listnners

var button = document.querySelector("button");

button.addEventListener("click", function() {
     console.log(this.style.color="red");   //change to color red
})
// this keyword is equal to
// whatever written before
// addEventListener, in this
// case button.

// call  apply bind

function abcd()  {
     console.log(this);
}
var obj = {name: "priyansh",
           age: 21
}
abcd.call(obj);

  // with extra parameter
function abcd1(val, val2, val3)  {
     console.log(this,23,34,56);
}
var obj = {name: "priyansh",
           age: 21,
           name2: "call function ha"

}
abcd1.call(obj,1,2,3);

// apply

function abcd2(val, val2, val3)  {
     console.log(this,val,val2,val3);
}
var obj = {name: "priyansh",
           age: 21,
           name2: "apply function ha"

}
abcd2.apply(obj,[4,5,6]);

//bind

function abcd3() {
     console.log(this);
}
var obj = {name: "priyansh",
           age: 21,
           name2: "bind function ha"
}
var bindFunc = abcd3.bind(obj);
bindFunc();

//pure and impure func

// Pure function is any function which has these 2 features :
// i) it should always return same output for same input
// ii) it will never change/update the value of a global variable.

function abcd(a,b) {
     return a*b;
}
var ans1 = abcd(1,3);
var ans2 = abcd(1,3);

function calc(val){
     return val+2;
}
var ans3 = calc(3);
     // PURE FUNCTION
     // always same answer if you pass same
     // value for 'val' argument, hence this
     // function is pure function

     // IMPURE FUNCTION
    let someval = 1;

      function calc1(x) {
      someval++;
      return someval;
    }
    var ans4 = calc1(3);
  //changes a value of a global variable called someval

