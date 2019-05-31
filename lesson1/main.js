'use strict';

// let a = 5;
// console.log(a);

// var number = 5;
 //var string = "Hello!";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {
// };

// console.log(4/0);
// console.log('string'/9);

// var something;
// console.log(something);
// let person = {
//     name: "John",
//     age: 25,
//     isMarried: true
// };

//console.log(person['isMarried']);

 //let arr = ['plum.png','orange.jpg','apple.bmp'];

// console.log(arr[0]);
// //alert("Hello world!");
let answer = confirm("Are you sure?");
console.log(answer);

let answer1 = prompt("Are you 18?", "Yes");
console.log(typeof(answer1));
//console.log("arr" + " - object");
//console.log(4 + " - object");


// let incr = 10,
//     decr = 10;

// //console.log(++incr);
// console.log(incr++);
// //console.log(--decr);
// console.log(decr--);

// console.log(5%2);
// console.log("5" == 5);

// let isChecked = false,
//     isClose = false;
// console.log(isChecked || !isClose);


// if (4 * 2 == 9) {
//     console.log("true");
// } else {
//     console.log("FALSE");
// }

let num = 50;
if (num < 49) {
    console.log("False")
} else  if (num > 100){
    console.log(" Too much!")
} else {console.log(" True")
};

(num == 50) ? console.log(" True") : console.log("False");

switch (num) {
    case num < 49:
         console.log("False");
         break;
    case num > 100:
        console.log(" Too much!");
        break;
    case num > 80:
        console.log("  Still Too much!");
        break;
    case  50:
        console.log("True");
        break;
    default: console.log("Something went wrong!");
        break;
}