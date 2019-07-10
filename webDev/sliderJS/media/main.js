
let left = 0,
    timer;
autoSlider();
function autoSlider() {
    timer = setTimeout(function() {
        let polosa = document.getElementById('polosa');
        left = left - 128;
        if(left < -512){
            left = 0;
        }
        polosa.style.left = left + 'px';
        autoSlider();
    }, 1500);
}

