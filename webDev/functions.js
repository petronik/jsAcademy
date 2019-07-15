// function One(name) {
//     this.name = name;
//     this.option = 'three';
//     this.color = 'red';
//     return this;
// }
// let animal = new One("dog");
// animal.br = 'four';
// delete animal.option;
// console.log(animal);
// console.log(this);

// function Name(name){
//     this.weight =95;
//     this.height = 180;
// }
// var names = new Name('Peter');
// console.log(names);

//^^^^^^^^^^^^^^^CLOSURES^^^^^^^^

// function makeCounter() {
//     var currentCount = 1;
//     return function() {
//         return currentCount++;
//     };
// }
// var counter = makeCounter();
// var counter2 = makeCounter();
// console.log( counter() );
// console.log( counter() );
// console.log( counter() );
// console.log( counter2() );
// console.log( counter2() );

// let message = (function(name) {
//     return 'Hello ' + name + '! ';
// })('Petro');
// console.log(message);


// let numbers = {
//     numberA: 5,
//     numberB: 10,
//     sum: function() {
//         console.log(this === numbers);
//         function calculate() {
//             console.log(this === numbers);
//             return this.numberA + this.numberB;
            
//         }
//            use .call() method to modify the context
//         return calculate.call(this); // => 15
//     }
// };
// console.log(numbers.sum());

//  Вызов метода

// let calc = {
//     num: 0,
//     increment: function() {
//         console.log(this === calc);
//         this.num += 1;
//         return this.num;
//     }
// };
// // method invocation. this is calc
// console.log(calc.increment());
// console.log(calc.increment());

let numbers = {
    array: [3, 5, 10],
    getNumbers: function() {
        return this.array;
    }
};

let boundGetNumbers = numbers.getNumbers.bind(numbers);
console.log(boundGetNumbers());
console.log(numbers.getNumbers);