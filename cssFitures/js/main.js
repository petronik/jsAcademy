jQuery(document).ready(function(){
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
});

// Card 3 >>>>>>>>

let boxBg = document.getElementById('boxBg');

    let xmouse, ymouse;

    boxBg.addEventListener('mousemove', function(e) {
      xmouse = e.clientX || e.pageX;
      ymouse = e.clientY || e.pageY;

      // console.log(e.pageX);
      
    });

    let ball = document.querySelector('#ball');
    // console.log(ball);
    let x = void 0,
        y = void 0,
        dx = void 0,
        dy = void 0,
        tx = 0,
        ty = 0,
        key = -1;

    let followMouse = function followMouse() {
      requestAnimationFrame(followMouse);

      if(!x || !y) {
        x = xmouse;
        y = ymouse;
      } else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;
        if(Math.abs(dx) + Math.abs(dy) < 0.1) {
          x = xmouse;
          y = ymouse;
        } else {
          x += dx;
          y += dy;
        }
      }
      console.log(Math.abs(dx));
      ball.style.left = x +'px';
      ball.style.top = y +'px';
    };
    followMouse();