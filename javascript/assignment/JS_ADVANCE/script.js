var  arr = [1,2,3,4,5,6,7];
arr.unshift(0);  // add value
arr.shift();    //remove starting value
arr.splice(2,2);

// execution context

function abcd() {
    var a = 12;
    function def() {
        var b = 13;
        console.log(b);
        
    }
  
}

var a;
if(7) {
    console.log("rr");
}
else{
    console.log("rishu");  
}

//for each looop

// foreach loop srf array pe chalta hai matlab ki jab bhi tumhaare paas ek array ho, tab use mein kaun aata hai foreach loop

var a = [1,2,23,34,34,4,23,4,3,45,54,3,23];  //not changr in original array
 a.forEach(function(val) {
console.log(val+2)
})


//for in loop for object

var obj = {
       name: "priyansh",
      age: 21,
      city: "bhopal"
}
for(var key in obj) (
    console.log(key, obj[key]) 
)
//call back func
setTimeout(function() {
 console.log("priyansh with nisha")
} ,2000)

// first class function
function abcd(a) {
    a();
} 
abcd(function() {console.log("first class function")});
