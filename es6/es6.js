// >>>>>>>>>Стрелочные функции

// let arr = ['apple', 1,33,true, 'banana', 'orange'];
// let breakfast = arr.map(item => {
//     return item + 's';
// });
// console.log(breakfast);

// >>>>>>>>>>>Spread/ Rest Оператор

// function foo( x, y, z) {
//     console.log(x, y, z);
// }
// let arr = [1, 2, 'one'];
// foo(...arr);

// function foo(...args) {
//     console.log(args);
// }
// foo(1, 2, 3, 4, 5, 'one') ;

// function getCar(make, model, value) {
//     return {
        // с синтаксисом короткой записи можно
        // пропускать значение свойства, если оно
        // совпадает с именем переменной, значение
        // которой мы хотим использовать
//         make,
//         model,
//         value,
//         ['make '+ make]: true,
//         depreciate() {
//             this.value -= 2500;
//         }
//     };
// }
// let car = getCar('Kia', 'Sorento', 40000);
// console.log(car);


// Ключевое слово super для объектов

// var parents = {
//     foo() {
//         console.log("Привет от родителя");
//     }
// };
// var child = {
//     foo() {
//         super.foo();
//         console.log('Привет от Ребенка!');
//     }
// };
// Object.setPrototypeOf(child, parents);
// child.foo();

// >>>>>>>>>>>for...of против for...in

// let niknames = ['di', 'boo', 'punkeye'];
// niknames.size = 3;
// for(let nikname of niknames) {
//     console.log(nikname);
// }

// let nikNames = ['di', 'boo', 'punkeye'];
// nikNames.size = 3;
// for(let nikname in nikNames) {
//     console.log(nikname);
// }


//>>>>>>>>>>>>>>>>>>>>> Interpolation

// let myName = "Ivan",
//     age = 42,
//     mail = 'mail@mail.ua';

//     console.log(`Пользователю ${myName} ${age} лет. Его Почта ${mail}`);

//<<<<<<<<<<<<<<<<<< Let, Const

// function makeArray() {
//         var items = [];
//         for(let i = 0; i < 10; i++) {
//                 var item = function() {
//                         console.log(i);
//                 };
//                 items.push(item);
//         }
//         return items;
// }

// var arr = makeArray();
// arr[1]();
// arr[3]();
// arr[7]();

//<<<<<<<<<<<<<<<<<<<<<<< Arrow function

// let func = () => {
//         console.log(this);
// };

// func();

let obj = {
        number:5,
        sayNumber: function() {
                let say = () => {
                        console.log(this);
                };
                say();
        }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let show = () => {
                console.log(this);
        };
        show();
});

function calcOrDouble(number, basis) {
        basis = basis || 2;
        console.log(number * basis);
}