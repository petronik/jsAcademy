// let a = 3;
// function addTwo(x) {
//     let ret = x + 2;
//     return ret;
// }
// let b = addTwo(a);
// console.log(b);


// let vall = 3;
// function multiplyThis(n) {
//     let ret = n * vall;
//     return ret;
// }
// let multiplied = multiplyThis(9);
// console.log('evaluation scope: ', multiplied);
    
// let val = 7;
// function createAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b;
//         return ret;
//     }
//     return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log('examle of function returning a function: ', sum);


// function createCounter() {
//     let counter = 0;
//      const myFunction = function() {
//          counter = counter + 1;
//          console.log( " counter is:", counter);
//          return counter;
//      };
//      return myFunction;
// }
// const increment = createCounter();
// const c1 = increment ();
// const c2 = increment ();
// const c3 = increment ();
// console.log('example increment: ', c1 ,c2, c3);


// let str = "aDASor";
// function ucFirst(str) {
//     let x = str.charAt(0).toUpperCase();
//     return x + str.slice(1);
// }
// console.log(ucFirst(str));


// var name = 'John';
// function sayHi() {
//     console.log("Hi, " + name);
// }
// sayHi();
// name = 'Pete';
// sayHi();

// function makeWorker() {
//     let name = "Pete";
//     return function() {
//         console.log(name);
//     };
// }
// let name = 'John';
// let work = makeWorker();
// work();

// function first() {
//     setTimeout( function(){
//         console.log(1);
//     }, 1000);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();
// //---------------------------------
// function learnJS(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }

// learnJS("JavaScript", done);

// function done(){
//     console.log("Я прошел 3й урок.");
// }
//===================================

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;
console.log(options);
for ( let key in options) {
    console.log("Свойство " + key + " имеет значение: " + options[key]);
}
console.log(Object.keys(options).length);