const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!");
}
function scream() {
    console.log("AAAAAHHHH!!!");
    console.log("STOP TOUCHING ME!!");
}
btn.onmouseenter = scream;



/////////////////////////////////////////////////////////////////////////////////

const RandColorBtn = document.querySelector("#RandColorBtn");


const GenerateRandColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const RandomColor = `rgb(${r}, ${g}, ${b})`;
    return RandomColor;
}

const RandBodyColor = function () {
    const newColor = GenerateRandColor();
    document.body.style.backgroundColor = newColor;
}


RandColorBtn.addEventListener('click', RandBodyColor);

///////////////////////////////////////////////////////////////////////////

const btnsRandBgColor = document.querySelectorAll(".RandomBackgroundColor");

for (let i of btnsRandBgColor) {
    i.addEventListener('click', function () {
        i.style.backgroundColor = GenerateRandColor();
    }, { once: true })
}