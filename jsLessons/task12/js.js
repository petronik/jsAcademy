
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

const myDivs = new Options(200,400, 'green', 30, 'center');
myDivs.divCreator();


