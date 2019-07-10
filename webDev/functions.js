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

var a = 3;
console.log(a);
 var a = 5;
console.log(a);