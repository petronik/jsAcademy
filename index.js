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



// let str = "Вот, что мне хотелось бы сказать на эту тему:";
// console.log(str.truncate(str, 20));

let str = "aDASor";
function ucFirst(str) {
    let x = str.charAt(0).toUpperCase();
    return x + str.slice(1);
    
}
console.log(ucFirst(str));