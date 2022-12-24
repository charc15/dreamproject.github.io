// Menú de barra -----------------------------------
let menu = document.getElementById('menu');
let barra1 = document.getElementById('barra-1');
let barra2 = document.getElementById('barra-2');
let barra3 = document.getElementById('barra-3');
let side = document.getElementById('side-off');
menu.addEventListener('click', () => {
    barra1.classList.toggle('barra-1-activa');
    barra2.classList.toggle('barra-2-activa');
    barra3.classList.toggle('barra-3-activa');
    menu.classList.toggle('menu-activo');
    side.classList.toggle('side-on');
});