// 4️⃣ Arrays (5 Questions)=>

    //qestion - 16
var arr = [1,3,5,6,7,90,90,6,6,6];
var ans = [...new Set(arr)];
console.log(ans);

    //qestion - 17

//  unique

// sort array desending order [5,4,3,2,1]
// 1st index arr[1]

var arr = [3,1,4,5,2,1];

var ans = [...new Set(arr)];
 var newarr = ans.sort(function(a,b) {
    return b-a;
})
console.log(newarr[1]);

// shortheand

 console.log([...new Set(arr)].sort(function(a,b) {
    return b-a;
})[1]);


//qestion - 18

var arr =  [1,2,3,4,5];
console.log(arr.sort(function(a,b) {
   return b-a;
})) 
//with fat arrow functionn

var ans = arr.sort((a,b) => b-a);

//qestion - 19

var arr =  [1,2,3,4,6,78,556,9];
var arr2 =[];

for(var i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
}
 console.log(arr2, "reverse array");

//qestion - 20

var arr = [3,4,1,3,4,6,8];
var obj = {};

arr.forEach(function(val) {
    obj[val]  === undefined ?  obj[val] = 1 : obj[val]++;  //ternary  operator
});


//second method 

function mostFrequent(arr) {
     let freqMap = {};
     let maxfreq = 0, mostFrequentNum = null;
     
     for(let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        
        if(freqMap[num] > maxfreq) {
            maxfreq = freqMap[num];
            mostFrequentNum = num;
         }
     }
     return mostFrequentNum;
}
console.log(mostFrequent([1,2,3,2,3,2,2,2]));

