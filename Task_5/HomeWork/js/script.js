let list = document.getElementsByTagName('li'),
    li = document.createElement('li'),
    ulist = document.querySelector('.menu'),
    text = document.createTextNode('Пятый пункт'),
    body1 = document.getElementsByTagName('body'),
    title1 = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    col = document.querySelectorAll('.column'),
    question,
    p = document.createElement('p'),
    opinion = document.getElementById('prompt');

ulist.appendChild(li);
li.classList.add('menu-item');
li.appendChild(text);
ulist.insertBefore(list[2], list[1]);
body1[0].style.background = ' url(../img/apple_true.jpg) center no-repeat';
col[1].removeChild(adv);
opinion.appendChild(p);
p.classList.add('paragraph');
title1.innerHTML = 'Мы продаем только подлинную технику Apple';




window.onload = function answer(){
    question = prompt('Ваше отношение к Apple? (Лимит 50 символов)');
    
    p.innerHTML = question;
    while (question == "" || question == null ) {
        
        question = prompt('Ваше отношение к Apple?', "");
    }
    if(question.length > 500){
        alert('Слишком Много Букв!');
        answer();
    }
};

