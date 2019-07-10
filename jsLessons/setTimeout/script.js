let liBox = document.querySelector('.list'),
list = document.getElementsByTagName('li');
console.log(liBox);
console.log(list);

liBox.addEventListener('click', function(event) {
if(event.target && event.target.matches('li.second')) {
    console.log('I\'m second!');
}
})

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 2000);
//  clearInterval(timerId);

//     function sayHello() {
//         console.log('Hello World!')
//     }



// let timerId = setTimeout(function log() {
//     console.log("Hello");
//     setTimeout(log, 100);
// });
// clearTimeout(timerId);

// let btn = document.querySelector('.btn'),
//     elem = document.querySelector('.square');

//     function myAnimation() {
//         let id = setInterval(frame, 10);
//         let pos = 0;
//         function frame () {
//             if(pos == 350) {
//                 clearInterval(id);
//             } else {
//                 pos++;
//                 elem.style.left = pos + 'px';
//                 elem.style.top = pos + 'px';
//             }
//         }
//     }
//     btn.addEventListener('click', myAnimation);

let btn = document.querySelector('.btn'),
elem = document.querySelector('.square');

function myAnimation() {
let pos = 0;
let id = setInterval(frame, 10);
function frame() {
if(pos == 350) {
    clearInterval(id);
} else {
    pos++;
    elem.style.left = pos + 'px';
    elem.style.top = pos + 'px';
}
}
}
btn.addEventListener('click', myAnimation);
// ---------------------------------------------------
// let btnBlock = document.querySelector('.box-container'),
//     btnc = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if(event.target && event.target.matches('button.last')) {
//         console.log('Hello!')
//     }
// })



let btnBox = document.querySelector('.box-container'),
btns = document.getElementsByTagName('button');

btnBox.addEventListener('click', function(event) {
if(event.target && event.target.tagName == 'BUTTON') {
console.log("Welcome!!!")
}
});