
var btn = document.querySelector('.btn');
var box = document.querySelector('.box');

btn.addEventListener('click', function() {
    var C1 = Math.floor(Math.random() * 256);
    var C2 = Math.floor(Math.random() * 256);
    var C3 = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${C1}, ${C2}, ${C3})`;
    
})

// ip; winner prediction
// let arr = ['CSK', "KKR", 'RR', 'GT', 'MI', 'RCB', 'SRH', 'LSG', 'DC', 'PBKS'];

// var button = document.querySelector('.btn-W');
// var h1 = document.querySelector('.h1');

// button.addEventListener('click', function() {
//     let ans = Math.floor(Math.random() * arr.length);
//     let Winner = arr[ans]; 
//     h1.innerHTML = Winner;
// });

let arr = [
    { team: "CSK", pri: "yellow", sec: "green" },
    { team: "KKR", pri: "purple", sec: "gold" },
    { team: "RR", pri: "pink", sec: "blue" },
    { team: "GT", pri: "dark blue", sec: "gold" },
    { team: "MI", pri: "blue", sec: "gold" },
    { team: "RCB", pri: "red", sec: "black" },
    { team: "SRH", pri: "orange", sec: "black" },
    { team: "LSG", pri: "blue", sec: "orange" },
    { team: "DC", pri: "blue", sec: "red" },
    { team: "PBKS", pri: "red", sec: "silver" }
];

var button = document.querySelector('.btn-W');
var h1 = document.querySelector('.h1');

button.addEventListener('click', function() {
    var num = Math.floor(Math.random() * arr.length);
    var winner = arr[num];

    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.pri;
    h1.style.color = winner.sec;
    
})

