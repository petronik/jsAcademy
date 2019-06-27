let list = document.getElementsByTagName('li'),
    li = document.createElement('li'),
    ulist = document.querySelector('.menu'),
    text = document.createTextNode('Пятый пункт'),
    body1 = document.getElementsByTagName('body'),
    titl = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    col = document.querySelectorAll('.column'),
    prompt = document.createElement('prompt');
console.log(body1);
ulist.appendChild(li);
li.classList.add('menu-item');
li.appendChild(text);
ulist.insertBefore(list[2], list[1]);
body1[0].style.background = ' url(../img/apple_true.jpg) center no-repeat';
col[1].removeChild(adv);
body1[0].appendChild(prompt);