// Seleccionar elementos
const nav = document.getElementById('navegador-lateral');
const main = document.getElementById('contenido');

// Escuchar el evento mouseout en el elemento nav
nav.addEventListener('mouseover', () => {
    // nav.style.gridColumn = '1 / 2';
    // main.style.gridColumn = '2 / -2';
    nav.style.transform = 'translateX(0)';
    main.style.transform = 'translateX(0)';
    main.style.width = '53vw';
    main.style.left = '0';
});

nav.addEventListener('mouseleave', () => {
    // main.style.gridColumn = '1 / -2';
    nav.style.transform = 'translateX(-80%)';
    main.style.transform = 'translateX(-30%)';
    main.style.left = '70px';
    main.style.width = '68vw';
});

