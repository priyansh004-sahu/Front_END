//  getattribute and setattributesn ✅
// creating an element ✅
// MouseEvent, KeyboardEvent, scroll, double, WheelEvent, etc

// var  h = document.querySelector('h1');

//  h.setAttribute('class', 'heroine');
//  h.setAttribute('id', 'heroine');

// var img = document.querySelector('img')

// console.log(img.setAttribute('src', 'https://img.freepik.com/free-photo/portrait-young-female-model-with-perfect-skin-posing-fashion-isolated-white-background_1150-63254.jpg?ga=GA1.1.19526272.1743692250&semt=ais_hybrid&w=740'));

var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')

var btn = document.querySelector('button')

btn.addEventListener('click', function() {
     var img1src = img1.getAttribute('src')
     var img2src = img2.getAttribute('src')
     
    img1.setAttribute('src', img2src)
    img2.setAttribute('src', img1src)
     
     
     
});


// Creating an element

var h1 = document.createElement('h1')
h1.innerHTML = 'Nisha'
var body = document.querySelector('body')

body.appendChild(h1);
 
// var image = document.querySelector('img')

// image.setAttribute('src', 'https://images.unsplash.com/photo-1672214013109-2f21828c7dc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpZ21hfGVufDB8fDB8fHww')


// document.body.appendChild(img)

var box = document.querySelector('body')

box.addEventListener('click',function(){
    console.log('clicked on box');
})
box.addEventListener('mouseenter',function(){
    console.log('Mouse Entered on box');
})
box.addEventListener('mouseleave',function(){
    console.log('Mouse Left from box');
})
box.addEventListener('mousemove',function(dets){
    console.log('MouseMoving on box',dets);
})
document.addEventListener('keydown',function(dets){
    console.log('Key down',dets);
})
document.addEventListener('keyup',function(dets){
    console.log('Key Up',dets);
})
document.addEventListener('wheel',function(dets){
    console.log('Wheel moving',dets);
})
document.addEventListener('scroll',function(dets){
    console.log('Scrolling...',dets);
})
