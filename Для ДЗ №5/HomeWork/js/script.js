let list = document.getElementsByTagName('li'),
    li = document.createElement('li'),
    ulist = document.querySelector('.menu'),
    text = document.createTextNode('Пятый пункт'),
    body1 = document.getElementsByTagName('body'),
    titl = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    col = document.querySelectorAll('.column'),
    question ,
    opinion = document.getElementById('prompt');
console.log(body1[0]);
ulist.appendChild(li);
li.classList.add('menu-item');
li.appendChild(text);
ulist.insertBefore(list[2], list[1]);
body1[0].style.background = ' url(../img/apple_true.jpg) center no-repeat';
col[1].removeChild(adv);


window.onload = function answer(){
    question = prompt('Ваше отношение к Apple?');
    opinion.innerHTML = question;
    while (question == "" || question == null ) {
        console.log("done");
        question = prompt('Ваше отношение к Apple?', "");
    }
};

