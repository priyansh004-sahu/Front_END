// JavaScript Advanced HOFs, Callbacks, and Closures => 4️⃣ question


//Create a function that takes a callback and executes it after every `n` seconds indefinitely.

function repeatfunc(func, time)  {
    setInterval(func, time);
}
repeatfunc(function(){
   console.log("repeat the task after every 2sec");
},300000)

// a function that returns a function with a preset greeting (Closure).

function greetkaro(greeting) {
    return function(name) {
     console.log(`${greeting} ${name}`);
     
    }
}
var greetingfnc = greetkaro("hello");
greetingfnc("priyansh");
greetingfnc("nisha");
greetingfnc("harsh");

console.log(" ");

var spanishfunc = greetkaro("hola !");
spanishfunc("nisha");

console.log(" ");

function greetkaro(greeting) {
    return function(name) {
           console.log(`${greeting} ${name}`);   
    }
}
var indiangreeter = greetkaro("Namaste 🙏🙏 ");     // setup for hindi
indiangreeter("priyansh");

var englishgreeter  = greetkaro("hello 🖐🖐 ")    // setup for english
englishgreeter("Nisha");



// takes a callback and only executes it once (HOF + Closure).

function onlyOncecaller(cb) {
    let executed = false;

    return function() {   // retuurn closure fnc
       if(!executed){
        executed = true;
        cb();
       }else {
        console.error("already executed once");
        
       }
    }
}
var newfunc = onlyOncecaller(function() {
    console.log("some code are exected");  
})

newfunc();
newfunc();
newfunc();

//implement a function that throttles another function (HOF + Closures).

// Throttling is a technique used to control 
// the rate at which a function is executed. It ensures that a function is only called at most once in a specified time interval, 
// even if the event triggering it occurs multiple times.

function throat(fnc, delay) {
    let lastcall = 0;
    return function() {
       let current = Date.now();
       if(current - lastcall >= delay) {
        lastcall = current;
        fnc();
       }
    }
}
var ans = throat(function() {
    console.log("will run in 2 second");
},2000);
ans();

