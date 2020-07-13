let btnNo = document.getElementsByClassName('btnNo')[0];
let btnSi = document.getElementsByClassName('btnSi')[0];
let width = document.querySelector('html').clientWidth - 80;
let heigth = document.querySelector('html').clientHeight - 40;

var url_string = window.location.href
var url = new URL(url_string);

var nameUrl = url.searchParams.get("n").toUpperCase();
var sexo = url.searchParams.get("s");

document.getElementById('name').innerText = nameUrl == undefined ? '' : nameUrl;
document.getElementById('sexo').innerText = sexo === 'm' ? 'novio' : sexo === 'f' ? 'novia' : 'pareja';

btnNo.addEventListener('mouseover', function () {
    btnNo.style.position = 'absolute';
    let randomTop = Math.random() * (heigth - 0);
    let randomLeft = Math.random() * (width - 0);
    btnNo.style.top = randomTop + "px";
    btnNo.style.left = randomLeft + "px";
});



document.getElementById('cerrar-popup').addEventListener('click', function () {
    displayPopup('none');
}, true);

btnSi.addEventListener('click', function () {
    displayPopup('flex');
}, true);

function displayPopup(option) {
    document.getElementById('popup').style.display = option;
}