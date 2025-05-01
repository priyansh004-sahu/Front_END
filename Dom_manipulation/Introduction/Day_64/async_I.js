/*
In programming, sync (synchronous) and async (asynchronous) refer to how tasks are executed in relation to each other, especially in terms of timing and waiting. Here's a simple breakdown:

🧵 Synchronous (Sync)
One task at a time – a new task waits for the current one to finish.

Blocking – if one task takes time, the rest are stuck waiting.

Example (JavaScript):

javascript
Copy
Edit
console.log("1");
console.log("2");
console.log("3");
*/

/*  
⚡ Asynchronous (Async)
Tasks can run independently – you don’t wait for a task to finish before moving to the next.

Non-blocking – helpful for time-consuming tasks like API calls, timers, file reads, etc.

Example (JavaScript):

javascript
Copy
Edit
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
*/

// Promises
// callback
// setTimeout
// setInterval
// async Wait

setTimeout(() => {
    console.log('priyansh');
}, 1000);


/*
In JavaScript, the term thread refers to the execution context where your code runs. Let me explain it clearly:

🧠 JavaScript is Single-Threaded
JavaScript runs on one thread – called the main thread.

This thread handles everything: executing code, handling events, rendering the UI, etc.

That means only one task can be executed at a time on this thread.

❓ Why is it important?
Because JS is single-threaded:

If a task (like a loop or slow operation) takes too long, it can block the entire page – including button clicks, animations, etc.

⚙️ But what about setTimeout, fetch, or async/await?
These seem like they run in the background. That's because of the browser's Web APIs and the event loop.

Example:

javascript
Copy
Edit
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("End");
📌 Output:

sql
Copy
Edit
Start  
End  
Inside setTimeout
Here’s what happens:

JS runs console.log("Start") → Main thread

setTimeout is handed off to the Web API thread (not JS’s thread)

JS runs console.log("End") → Main thread

After 1 second, the callback from setTimeout is pushed to the queue

When the main thread is free, the event loop pushes that callback to be executed

🧵 Summary:
Term	Explanation
Thread	A sequence of instructions executed by JS (JS has only one)
Single-threaded	JS can only do one thing at a time
Event loop	Allows async operations to wait without blocking the main thread
Web APIs	Provided by the browser to handle async tasks separately
*/





/*
🧵 Synchronous Code:
JavaScript single-threaded hai – iska matlab hai ek waqt mein sirf ek kaam (task) hi ho sakta hai.

Jo code aapne directly likha hai (without setTimeout, fetch, etc.), woh main thread pe turant chalta hai.

Isse blocking bhi kehte hain – jab tak ye code pura nahi ho jaata, baaki kuch bhi nahi chalega (including async code).

⚡ Asynchronous Code:
Jaise hi JS kisi async operation (e.g., setTimeout, fetch, promise) pe aati hai, woh usse Web APIs ko de deti hai handle karne ke liye.

Fir main thread apna kaam aage badhata hai.

Jab async task ready ho jaata hai, uska callback callback queue mein chala jaata hai.

Event Loop ensure karta hai ki jab main thread free ho, tabhi async task execute ho.

🔁 Final Flow:
✅ Synchronous code executes completely first.

🕒 Async tasks wait (handled by browser).

🔄 Event loop checks: “Main thread free hai?”

🧠 If yes → async task callback is moved to the main thread for execution.

Example:
javascript
Copy
Edit
console.log("1");  // sync
setTimeout(() => {
  console.log("2");  // async
}, 0);
console.log("3");  // sync
📌 Output:

Copy
Edit
1  
3  
2
Even with 0ms delay, setTimeout callback waits until synchronous code is done.








🧵 1. Main Thread
The core of JavaScript execution.

Runs all synchronous code line by line.

Only one task at a time (single-threaded).

🌐 2. Web API
Provided by the browser (not JavaScript itself).

Handles async tasks like setTimeout, fetch, DOM events, etc.

After completing a task, it passes the callback to a queue.

🔄 3. Callback Queue (Macrotask Queue)
Stores completed macrotasks like setTimeout, setInterval.

These are executed after all synchronous code and microtasks.

📋 4. Microtask Queue
Stores microtasks like .then() from Promises, queueMicrotask().

Always executed immediately after the current synchronous code, before macrotasks.

⏳ 5. Macrotask Queue
A category for tasks like setTimeout, UI rendering, etc.

Same as callback queue, but this name helps differentiate it from microtasks.

🔁 Event Loop
Keeps checking: "Is the main thread free?"

If yes:

First runs all microtasks

Then takes one macrotask from the callback queue


*/

console.log("hey");   // sync
setTimeout(() => {     // async
    console.log("hey - 3");
}, 0);

Promise.resolve().then(function() {    // async
    console.log("hey - 2");
});
console.log("hey - 4");     // sync

