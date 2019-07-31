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
    // request.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if( request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'Something went wrong!';
        }
    });
});

let myJson = document.getElementById('myJson'),
   btn = document.getElementById('btn');

    btn.addEventListener('click', sendRequest);

    function sendRequest () {
        let myReq = new XMLHttpRequest();

        myReq.open('GET' , 'https://jsonplaceholder.typicode.com/posts');
        myReq.send();

        myReq.addEventListener('readystatechange', () => {
            if(myReq.readyState === 4 && myReq.status == 200) {
                let myData = JSON.parse(myReq.response);
                    console.log(myData);
                    let out2 = '';
                    for(let key in myData) {
                        out2 += `<div class="post">
                        <b> Autor </b> ${myData[key].userId} <br>
                        <b>Post number: </b> ${myData[key].id} <br>  
                         <h2 class="span1">${myData[key].title}</h2>  <br>
                        <b>Message:</b> ${myData[key].body}
                        </div>
                        `;
                    }
                myJson.innerHTML = out2;
            } else {
                myJson.innerHTML = 'Something went wrong';
            }
        });
    }


