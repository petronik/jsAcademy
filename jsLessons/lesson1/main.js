// 'use strict';

// // let a = 5;
// // console.log(a);

// // var number = 5;
//  //var string = "Hello!";
// // var sym = Symbol();
// // var boolean = true;
// // null;
// // undefined;
// // var obj = {
// // };

// // console.log(4/0);
// // console.log('string'/9);

// // var something;
// // console.log(something);
// // let person = {
// //     name: "John",
// //     age: 25,
// //     isMarried: true
// // };

// //console.log(person['isMarried']);

//  //let arr = ['plum.png','orange.jpg','apple.bmp'];

// // console.log(arr[0]);
// // //alert("Hello world!");
// let answer = confirm("Are you sure?");
// console.log(answer);

// let answer1 = prompt("Are you 18?", "Yes");
// console.log(typeof(answer1));
// //console.log("arr" + " - object");
// //console.log(4 + " - object");


// // let incr = 10,
// //     decr = 10;

// // //console.log(++incr);
// // console.log(incr++);
// // //console.log(--decr);
// // console.log(decr--);

// // console.log(5%2);
// // console.log("5" == 5);

// // let isChecked = false,
// //     isClose = false;
// // console.log(isChecked || !isClose);


// // if (4 * 2 == 9) {
// //     console.log("true");
// // } else {
// //     console.log("FALSE");
// // }

// let num = 50;
// if (num < 49) {
//     console.log("False")
// } else  if (num > 100){
//     console.log(" Too much!")
// } else {console.log(" True")
// };

// (num == 50) ? console.log(" True") : console.log("False");

// switch (num) {
//     case num < 49:
//          console.log("False");
//          break;
//     case num > 100:
//         console.log(" Too much!");
//         break;
//     case num > 80:
//         console.log("  Still Too much!");
//         break;
//     case  50:
//         console.log("True");
//         break;
//     default: console.log("Something went wrong!");
//         break;
// }


//let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// };
// do {
//     console.log(num);
//     num++;
// }
// while( num < 57);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }
// while(num < 60) {
//     console.log(num);
//     num++;
//     if (num == 56){
//         break;
//     }
// }

// for (let i = 1; i < 10; i++) {
//     console.log(i , i);
// }


//-------functions----------------------------

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     const num = 10;
//     console.log(num);
// }
// showFirstMessage("Hello!");
// console.log(num);


// let calc = function (a, b) {
//     return (a + b);
// };

// let calc = (a, b) => a + b;
// console.log(calc(8, 4));
// console.log(calc(4, 3));

// function retVar() {
//     let num = 50;
//     return num;
// }
// let anotherNum = retVar();
// console.log(anotherNum);
//======================================
// let str = "test";
// console.log(str.length);
//  console.log(str.toUpperCase());
//  console.log(str.toLocaleLowerCase());

//  let twelve = "12.2px";
//  //console.log(Math.round(twelve));
//  console.log(parseInt(twelve));
//  console.log(parseFloat(twelve));
 //==================================
//*************Factorial***************/
//  let fact = 1;
//  for(var i = 1; i < 10; i++) {
//      fact = fact * i;
//      console.log(i + "! = " + fact);
//  }

//************************************* */
function hello() {
    console.log("Hello World!");
}
hello();

function hi() {
    console.log("Hello World!");
}
hi();
let arr = [1, 15, 4, 30, 42],
    i = arr.sort(compareNum);

    function compareNum(a, b) {
        return a-b;
    }
    console.log(arr);
    