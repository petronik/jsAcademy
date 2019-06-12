//let arr = ["first", 2, 3, "four", 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log('элемент ' + i + ': ' + item + "(массив: " + mass + ")");
// });
// console.log(arr);


// let mass = [1,3,4,6,7];

// for(let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];
//     arr = ans.split(',');
//     console.log(arr);

// let arr = ["aawwe", "zzz","pp", "qwe"],
// i = arr.join(', ');
// console.log(i);
let arr = [1, 15, 4, 12, 11,17],
 i = arr.sort(compareNum);

 function compareNum(a, b){
     return b-a;
 }

 console.log(arr);
