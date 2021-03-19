// tady je místo pro náš program

let odstavec = document.querySelector(".odstavec");

//onmouseover a onmouseout použít

function boldText() {
    odstavec.style.fontWeight="bold";
}

function normalText(){
    odstavec.style.fontWeight="normal";
}

function colorChange(){
    odstavec.classList.toggle("cervena");
}

//zvětší se o 1 pixel vždy, nemám nejmenší tušení, jak se to dělá, enjoy my copy pasted solution

function increaseFontSize(id, increaseFactor){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}

function biggerFont(){
   
}

//audio

function prehrat(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

function zacatek(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.load();
}

function zastavit(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

function zastavit(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

function ztisit(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
}

function polovicniHlasitost(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

function vysokaHlasitost(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}