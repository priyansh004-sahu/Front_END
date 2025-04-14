// JSON Data to fronted
// Event Bubbling
// Local storage

// var arr = [10, 20, 30, 40, 50];
// // arr.forEach(element => { 
// //     // console.log(element);  // Log each element, not the whole array
// // });

// arr.forEach(function(elem, idx) {
//     console.log(elem, idx);
    
// })

// console.log(arr[0].user);

// arr.forEach(function(elem) {
//     console.log(elem.user);
    
// })
// // make a program to add all age 



var arr = [
    {
        user: 'Priyansh',
        age: 21,
        married: true,
        Image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        status: "stranger"
    }, {
        user: 'Jatin',
        age: 25,
        married: false,
        Image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        status: "stranger"
    }, {
        user: 'Virat',
        age: 37,
        married: false,
        Image: "https://images.unsplash.com/photo-1613005798967-632017e477c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        status: "stranger"
    }
];

var main = document.querySelector('#main');
function heroFunction() {
    var sum = '';
arr.forEach(function(elem, idx) {
    sum += `<div class="card">
        <img src="${elem.Image}" alt="">
        <h1>${elem.user}, ${elem.age}</h1>
        <h4>Married: ${elem.married}</h4>
        <h5> ${elem.status}</h5>
       <button id=${idx}>Add Friend</button>
    </div>`;
});

main.innerHTML = sum;
}
heroFunction();

var h1 = document.querySelector('.card h1')

main.addEventListener('click', function(dets){
   var gold = arr[dets.target.id]
   if(gold.status == 'stranger') {
        gold.status = 'Friends';
   } else {
         gold.status = 'stranger';
       
   }
   heroFunction()
   
    
}) 