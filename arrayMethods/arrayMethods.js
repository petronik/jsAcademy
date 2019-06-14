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
// i = arr.join(", ");
// console.log(arr);



// let arr = [1, 15, 4, 12, 11, "aawwe", "zzz","pp", "qwe"],
//  i = arr.sort(compareNum);

//  function compareNum(a, b){
//      return a - b;
//  }

//  console.log(arr);


//----__protoTyping__-------
//  let soldier = {
//      health: 400,
//      armor: 999,
//      weapon: 'knife'
//  };
//  let john = {
//      health: 100
//  };
//  john.__proto__ = soldier;
//  console.log(john);
//  console.log(john.weapon);


//-----Создание объектов через "new"------

// function Animal(name) {
//     this.name = name;
//     this.canWalk = true;
// }
// var animal = new Animal("ёжик");
// console.log(animal);

// function BigAnimal() {
//     this.name = "Mouse";
//     return {name:"Godzilla"};
// }
// console.log(new BigAnimal().name);

// function User(name) {
//     this.name = name;
//     this.sayHi = function() {
//         console.log("My name: " + this.name);
//     };
// }
// var ivan = new User("Ivan");
// ivan.sayHi();

// function User(firstName, lastName) {
//     var phrase = "Hello";

//     function getFullName() {
//         return firstName + " " + lastName;
//     }
//     this.sayHi = function() {
//         console.log( phrase + ", " + getFullName() );
//     };
// }
// var vasya = new User("Vasya", "Petrov");
// vasya.sayHi();

// var obj = {};
// function A() {return obj; }
// function B() {return obj; }

// var a = new A();
// var b = new B();

// console.log( a==b);


// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };

// this.sum = function()  {
//     return this.a + this.b;
// };
// this.mul = function () {
//     return this.a * this.b;
// };
// }
//  var calculator = new Calculator();
//  calculator.read();
//  alert( "Cymma=" + calculator.sum() );
//  alert("Произведение=" + calculator.mul() );

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Сколько добавлять будем?', 0);
    };
}
 var accumulator = new Accumulator(1);
 accumulator.read();
 accumulator.read();
 alert( accumulator.value);
