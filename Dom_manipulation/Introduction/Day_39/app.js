setTimeout(function() {
     console.log("hello");
     
},1000)

var btn = document.querySelector('#btn');
var h5 = document.querySelector('#status');

var check = 0;

btn.addEventListener('click', function() {

if(check == 0) {
    h5.innerHTML = "Request Sending..."
    h5.style.color = "gold";

    setTimeout( function() {
        h5.innerHTML = "Friends";
        h5.style.color = 'green';
        btn.innerHTML = "Remove Friends";
        check = 1;
    }, 3000)
    }  else {
            h5.innerHTML = "Stranger";
            h5.style.color = 'red';
            btn.innerHTML = "Add Friends";
            check = 0;
         }

 });


 var a = 0;
 setInterval(() => {
    a++;
    console.log("value of a " + a);
    
 }, 10000);