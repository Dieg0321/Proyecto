const searchInput = document.querySelector('.busqueda');
const searchBtn = document.querySelector('.busqueda_btn');

const buscar = function () {
    const searchValue = searchInput.value.toLowerCase();
    const urlActual = window.location.href;
    const pages = ['FAQ', 'login', 'noticias', 'investigacion', 'reconocimiento', 'admisiones'];
    let pageFound = false;
    for (let i = 0; i < pages.length; i++) {
        const pageName = pages[i].toLowerCase();
        if (pageName.includes(searchValue)) {
            let url = 'pages/' + pages[i] + '.html'
            if (!urlActual.includes('index.html')) {
                url = '../' + url;
            }
            window.location.href = url;
            pageFound = true;
            break;
        }

    }
    if (!pageFound) {
        alert('No se encontraron resultados para la búsqueda');
    }
}


searchBtn.addEventListener('click', buscar);
searchInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        buscar();
    }
});

