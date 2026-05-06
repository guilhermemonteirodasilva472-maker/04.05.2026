let index = 0;
const container = document.querySelectorAll('.container img');


function carrossel(i) {
    container.forEach(img => img.classList.remove('imagem'));
    if (index >= container.length) index = 0;
    else if (i < 0) index = container.length - 1;
    else index = i;
    container[index].classList.add('imagem');
}
document.getElementById('proximo').addEventListener('click', () => carrossel(index + 1));
document.getElementById('anterior').addEventListener('click', () => carrossel(index - 1));