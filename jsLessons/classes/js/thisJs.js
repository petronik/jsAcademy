// 'use strict'
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
//  showThis(4, 8);
//  showThis(7, 3);

// let obj = {
//     a: 20,
//     b:15,
//     sum: function () {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

//  let user = {
//      name: 'John'
//  };
//   function sayName(surname) {
//       console.log(this);
//       console.log(this.name + surname);
//   }
//   console.log(sayName.call(user, ' Smith'));
//   console.log(sayName.apply(user, [' Snow']));

//   function count(number) {
//       return this * number;
//   }
//   let double = count.bind(2);
//   console.log(double(3));
//   console.log(double(10));


let btn = document.querySelectorAll('button');
console.log(btn);
let myBody = document.querySelector('body');

myBody.addEventListener('click', function(event) {
    console.log(this);
    this.style.backgroundColor = 'red';
    event.target.style.backgroundColor = 'green';
    function showThis() {
        console.log(this);
    }
    showThis();
});



// btn.forEach(function(item) {
//     item.style.backgroundColor = 'red';
// });

 // 1) просто вызов функции - this = window/undefind;
 // 2) Метод обЪекта - this = объект;
 // 3) Конструктор (new)- this =  новый созданный объект;
// 4) указание конкрктного контекста - call, aply, bind;