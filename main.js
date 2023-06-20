const teclas = document.querySelectorAll('.tecla')

function tocaSom(idDoSom) {
    document.querySelector(idDoSom).play();
}

for (let i = 0; i < teclas.length; i++) {

    const idDoSom = teclas[i].classList[1]
    teclas[i].onclick = function () {
        tocaSom(`#som_${idDoSom}`);

        teclas[i].onkeydown = function (evento) {
            if (evento.code === "space" || evento.code === "Enter") {
                teclas[i].classList.add('ativa');
            }
        }
        teclas[i].onkeyup = function (evento) {
            if (evento.code === "space" || evento.code === "Enter") {
                teclas[i].classList.remove('ativa');
            }
        }
    }
}


