// 1. simulate a food delivery
// Task: Create a function orderFood that returns a Promise.
//  It should resolve after 2 seconds with" Pizza delivered!".
// Bonus: Add a chance to reject with " Delivery failed!".

function orderFood() {
    return new Promise((res, rej) => {
       setTimeout(() => {
       let chance = Math.random() < .7;
       if(chance) res()
        else rej()
       }, 2000);
    })
}
orderFood().then(function() {
    console.log("🍕 Pizza delivered!");
})
.catch(function() {
    console.log("Delivery failed!");
    
})

 // ✅2. Chained Promises: User → Posts → Comments
 // Task:
 //  1. Create getUser()→ resolves with { id: 1, name: "Harsh" }
//2. getPosts (userId)→ resolves with list of post titles
//3. getComments (postId) → resolves with comments
// Chain them together using .then() and log the final output.

function getUser(){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({id: 1, name: "harsh"})
      }, 1000);
    })
}
function getPosts(userId) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(["title 1", "title 2"])
        }, 1000);
 
    })
}
function getComments(postId) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(["great post", "amazing content", "you rocked"])
        }, 1000);
    })
}


getUser()
.then(function(data) {
   console.log(data);
   return getPosts(data.id)
})
.then(function(title) {
  console.log(title);
  return getComments("priyansh")
})
.then(function(Comments) {
    console.log(Comments); 
})
.finally(function() {
    console.log("all data are fetched...");
    
})

/*
 ✅ 3. Fake API Delay
// Task:
// Write a function fakeApiCall(endpoint) that:
//Accepts a string like "users" or "posts" 
Resolves with some dummy data after a random delay (1-3 sec)
*/

function fakeApiCall(endpoint) {
   const data = {
      users: ["harsh", "priyansh", "raghav"],
      Posts: ["hey champs", "greate loving the work", "You are awesome ❤"]
   };
    let delay = Math.random() * 2000 + 1000;
    return new Promise((res, rej) => {
         setTimeout(() => {
             res(data[endpoint]);
         }, delay);
    })
}

fakeApiCall("users").then(function(data) {
    console.log(data);  
})
fakeApiCall("Posts").then(function(data) {
    console.log(data);  
})