const boton = document.getElementById('volver-inicio');

boton.addEventListener('click', function () {
    window.location.href = '../index.html';
    console.log("Se ejecuta");
    return false;
});
