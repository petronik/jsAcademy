let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     console.log('You clicked first button');
// };
// btn[0].onclick = function() {
//     console.log('You clicked first button again');
// };

// btn[0].addEventListener('click', function(event){
//     console.log('Произошло событие: ' + event.type +
//      ' на элементе  ' + event.target);
// });


wrap.addEventListener('click', function() {
    console.log('Произошло событие еще: ' + event.type +
     ' на элементе  ' + event.target);
});
link.addEventListener('click', function () {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type +
     ' на элементе  ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('click', function () {
        console.log('Вышли!');
    });
});