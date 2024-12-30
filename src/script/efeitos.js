const listaImagens = document.getElementById('lista-imagens');
const imagens = document.querySelectorAll('#lista-imagens img');

let idx = 0;

function carrossel() {
    idx++;

    if (idx >= imagens.length) {
        idx = 0;
    }

    listaImagens.style.transform = `translateY(${-idx * 98}%)`;
    listaImagens.style.transition = 'transform 2s ease-in-out';
}


setInterval(carrossel, 3000);
