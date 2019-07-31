// window.addEventListener('DOMContentLoaded', function() {

//     "use strict";
//     let message = {
//         loading: "Загрузка",
//         success: "Спасибо! Мы с вами свяжемся!",
//         failure: "Что-то пошло не так..."
//     };
//     let form = document.querySelector('.formClass'),
//         input1 = form.getElementsByTagName('input'),
//         statusMessage = document.createElement('div');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         form.appendChild(statusMessage);

//         let request = new XMLHttpRequest();
//         request.open('POST', 'server.php');
//         request.setRequestHeader('Content-Type', 'application/x-www-form-urlcoded');

//         let formData = new FormData(form);
//         let obj = {};
//         formData.forEach(function(value, key) {
//             obj[key] = value;
//         });
//         let json = JSON.stringify(obj);


//         request.send(json);

//         request.addEventListener('readystatechange', function() {
//             if(request.readyState < 4) {
//                 statusMessage.innerHTML = message.loading;
//             } else if (request.readyState === 4 && request.status === 200) {
//                 statusMessage.innerHTML = message.success;
//             } else {
//                 statusMessage.innerHTML = message.failure;
//             }
//         });

//         for(let i = 0; i < input1.length; i++) {
//             console.log(input1[i].value);
//             input1[i].value = '';
//         }
//         console.log(formData);

//     });
// });

window.addEventListener('DOMContentLoaded', function() {

    let message = {
        loaded: 'Loading...',
        success: 'Thank you! We call you back!',
        failure: 'Something went wrong...('
    };

    let form = document.querySelector('.formClass'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(form);

            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', function() {
                if(request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status === 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            for(let i = 0; i < input.length; i++) {
                input[0].value = '';
            }


        });


});