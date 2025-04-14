// dom and fuctionalities in js

//1. Local storage
// 2.session  storage
//3.cookie
//4. window Object model
//5.child node
//6. classlist

var btn = document.querySelector('button')

var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')


btn.addEventListener('click', function(){
   location.href = 'https://chat.openai.com/'
   location.reload()  
})


btn1.addEventListener('click', function() {
   history.back()
})
btn2.addEventListener('click', function() {
    history.forward() 
})

// local storage  => browser ki storage

// local.storage.setItem
// local.storage.getItem
//  localStorage.removeItem('age')      // remove particular item from the storage
// localStorage.clear()

localStorage.setItem('user', 'priyansh')  // set in the local storage
var user = localStorage.getItem('user')   // get from the local storage
console.log(user);


// aap objects ko directly localstorage me save nahi kar payenge

// isliye JSON.stringify() can be used to convert it as a string

// if you want to get that data can use JSON.parse() to convert it again in json

var arr = [
    {
        username: "virat kholi",
        age: 21,
        city: 'bhopal'
    },
    {
        username: "thala ",
        age: 21,
        city: 'indore'
    },
    {
        username: "rohit ",
        age: 21,
        city: 'jaipur'
    }
]
// convert for locl storage

var newUsers = JSON.stringify(arr)
// console.log(newUsers);
localStorage.setItem('users', newUsers)

// convert for console
var users = localStorage.getItem('users')
var newUsers = JSON.parse(users)
console.log(newUsers);

// sessionStorage => delete when tab is close and reopen

// sessionStorage.setItem
// sessionStorage.getItem
// sessionStorage.removeItem('age')      // remove particular item from the storage
// sessionStorage.clear()

// document.cookie = "user= priyansh; "

// class-list

var div = document.querySelector('div')
div.classList.add('circle')

// div.classList.remove('circle')
// document.body.classList.toggle("")  ha toh  remove kargega, nahi ha toh add kardega

// task make a webpage with feature of light and dark mode
// with help of classList and localstorage