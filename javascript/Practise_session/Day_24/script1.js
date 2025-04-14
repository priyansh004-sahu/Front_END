function abcd(fn){
  fn();
}
abcd(function(){})  // call back fnc

// // hofs -> ek aisa function jo accept kare doosra function in parameter ya
//  fir return kare ek aur function, aise fnc ko kehte hai hofs

function abcd(fn){
    return function(){

    }
}
abcd()  

// closures -> ek aisa function jo return kare doosra function and jo fnc
//  return hua hai wo use kare parent fnc ka koi variable

function abcd() {
    var a = 12;
    return function() {
        console.log(a)       
    }
}
 var ans = abcd();

// .map() function
var arr = [1,2,3,4,5];
var ans = arr.map(function(value){
       return value + 2;
})



