//let dox = document.querySelector('.myClass');

// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };
// let b = JSON.parse(JSON.stringify(options)),
//     a = JSON.stringify(options);
// dox.innerHTML = b || a;
// console.log(a);
// console.log(b);

//>>>> AJAX <<<<<<<<<<<
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        }
    });
});

