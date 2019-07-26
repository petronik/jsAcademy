
let myHeight = document.querySelector('#myHeight'),
    myInput = document.querySelectorAll('input'),
    inputField = document.querySelector('.inputField');

class Options {
    constructor(height,width, bg,fontSize,textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    divCreator() {
        let div = document.createElement('div');
        div.classList.add('myClass');
        div.style.cssText = `height:${this.height}px;width:${this.width}px
            ;background-color:${this.bg};font-size:${this.fontSize}px
            ;text-align:${this.textAlign};border:solid red 2px`;
        div.textContent = 'Hello World!';
        document.body.appendChild(div);
    }
}
var boo;
myInput[0].addEventListener('input', function(boo) {
    boo = myInput[0].value;
console.log(myDivs.height);
});
const myArr = [200, 700, 'green', 30, 'center'];
const myDivs = new Options(...myArr);
console.log(boo);
myDivs.divCreator();





