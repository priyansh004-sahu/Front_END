// DOM => document Object model

//  Selection of Element ✅✅
//  Changing HTML ✅
//  Changing CSS ✅
//  Event Listener ✅


//  var h = document.querySelector('h1');

//  h.innerHTML =  'With priyansh';
//  h.style.color = 'blue';
//  h.style.backgroundColor = 'red';

//  h.addEventListener('click', function() {
//    h.style.backgroundColor = "white"
//    h.style.color = "red";
//  })

 var ans1 = document.querySelectorAll('h1')
 
 ans1[0].innerHTML = "madmax - 1";
 ans1[1].innerHTML = "madmax - 2";
 ans1[2].innerHTML = "madmax - 3";

 var ans = document.getElementById('box') ;
 var button = document.getElementById('btn') ;
 function changeBox() {
     ans.style.backgroundColor = "orange";
}
  button.addEventListener('click', changeBox)

  var button1 = document.querySelector('.bttn'); 
  var h5 = document.querySelector('h5');
  
  var check = 0;
  button1.addEventListener('click', function() {
      
    if(check == 0) {
      h5.innerHTML = 'Friend';
      h5.style.color = 'green';

      button1.innerHTML = 'Remove Friend'
      button1.style.backgroundColor = 'grey'
      button1.style.color = 'white'
      check = 1;
    } else {
      h5.innerHTML = 'stranger';
      h5.style.color = 'red';

      button1.innerHTML = 'Friend'
      button1.style.backgroundColor = 'grey'
      button1.style.color = 'white'
      check = 0;
    }
  })  
  