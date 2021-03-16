// tady je místo pro náš program

/*let nadpis = document.querySelector("h1");
nadpis.classList.toggle("zeleny");*/

let paragraf = document.querySelector(".odstavec");

//onmouseover a onmouseout použít

function boldText() {
    paragraf.style.fontWeight="bold";
}

function normalText(){
    paragraf.style.fontWeight="normal";
}

function colorChange(){
    paragraf.classList.toggle("cervena");
}

//zvětší seo 1 pixel vždy, ne jen na 17px

function biggerFont(){
    paragraf.style.fontSize="17px";
}
