// async js

// code do prakaar ka hota hai -> sync async
// sync code turant chalta hai
// // async code baad mein chalta hai

// async code sabse pahle jaata hai webAPIs pe, jab waha par ye resolve hojaata hai,
//  tab ye code jaata hai callback queue and fir event loop check krta hai main thread mein call stack
//  khaali hua ya nahi and agar hua to main thread ur stack par rah rahe execution contexts

// example
function getDetails(username, cb) {
    setTimeout(() => {
        console.log("sending the request to instagram..");   
    }, 1000);
    setTimeout(() => {
        console.log("fetching the data...");   
    }, 3000);
    setTimeout(() => {
        cb()
    }, 6000);
}

getDetails("priyansh sahu", function() {
    console.log("data saved in gallery");
    
})

function stepOne(cb) {
console.log("step one");
cb();
}
function stepTwo(cb) {
console.log('step two');
cb();

}
function stepThree(cb) {
console.log('step three');
cb();

}

stepOne(() => {
    stepTwo(() => {
        stepThree(() => {
           console.log("all callback complete");
           
        })
    })
})

// promises using

const pr = new Promise(function(res, rej) {
    console.log("instagram jaao data laao");
    console.log("instagram mein data collect ho raha hai");
    console.log("instagram mein data collect mein error nahi aaya");
    console.log("instagram data...");
    res();
});

pr.then(function() {
    console.log("resolved");
    
}).catch(function() {
    console.log("rejected");
    
})


// resolve the callback hell with the promises

function stepOne() {
    return new Promise(function(res, rej) {
    console.log("step one 1️⃣");
    res();
    })
}
function stepTwo() {
    return new Promise(function(res, rej) {
        console.log("step 2 2️⃣");
        res();
        })  
}
function stepThree() {
    return new Promise(function(res, rej) {
        console.log("step 3 3️⃣");
        res();
        })   
}
    
stepOne()
      .then(stepTwo)
      .then(stepThree)
      .then(function() {
        console.log("all steps done✅✅");
        
      })