window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        


    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    
    // Timer

    let deadline = '2019-09-10';

    function getTimeRemaning(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60) % 24)),
            days = Math.floor((t/(1000*60*60*24)));

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }
function setClock(id, endTime){
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaning(endTime);
            days.textContent = t.days + '_d';
            hours.textContent = t.hours + '_h';
            minutes.textContent = t.minutes + '_m';
            seconds.textContent = t.seconds + '_s';
        
            if(t.seconds < 10) {
                seconds.textContent = '0' + t.seconds  + '_s';
            }
            if(t.minutes < 10) {
                minutes.textContent = '0' + t.minutes + '_m';
            }
            if(t.hours < 10) {
                hours.textContent = '0' + t.hours + '_h';
            }
            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
}
setClock('timer', deadline);

//Modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';

    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });

    // Form

let message = { 
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так..."
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request =  new XMLHttpRequest();
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
        } else if(request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
});


});

