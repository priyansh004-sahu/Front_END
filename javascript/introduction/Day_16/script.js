let str = "priyansh";
let ans = str.slice(0, 5);  // small  part of string

let str1 = `my age is ${18 + 2}`;   // template literal

let str2 = "hell0 ji kaise ho app";
let ans1 = str2.split('i');  

let strr  = "priyansh ji ";
let anss = strr.replaceAll("i", 'z');

let str3 ="priyansh  with nisha";
let ans3 = str3.includes("nisha");

// condition ? () : ()

12 < 13 ? console.log("yes") : console.log("false");

// switch(value) {
//     case value;
//            //code
//            break;
//     case value;
//           //code
//           break;
//     defalut:
// }
switch("priyansh") {
    case "hrshit":
      console.log("you are harshit");
      break;
    case "harsh":
        break;
       console.log("you are harsh");
    case "priyansh":
        console.log("you are priyansh");
        break;
    default :
      console.log("you are not chutiya ha kya, shivam or priyansh");
}
console.log("");

let arr = [1, 2, 3, 4, 5];
for(let i=0; i <arr.length; i++) {
    console.log(i);
}
console.log("");

let i = 1;
while(i < 3){
    console.log(i);
    i++;
}
console.log("");

let j = 12;
do{
    console.log(j);
    j++;
} while( j < 15);
console.log("");

for(let k=11; k<20; k++) {
    console.log(k);
    if(k === 14) break;
}
console.log("");

for( l=12; l<23; l++) {
    if(l === 16) continue;
    console.log(l);
}
