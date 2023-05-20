
//const subtrair = document.querySelector("#subtrair");
//const somar = document.querySelector("#somar");
//const braco = document.querySelector("#braco");

//const controle = document.querySelectorAll(".controle-ajuste");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        //manipulaDados(evento.target.textContent, evento.target.parentNode);
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {

    //const peca = controle.querySelector(".controle-contador");
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function trocaImagem(cor) {
    document.querySelector(".robo").src = "img/Robotron 2000 - " + cor + ".png";
}



/*
somar.addEventListener("click", function (evento) {

    braco.value = parseInt(braco.value) + 1;
});

subtrair.addEventListener("click", function (evento) {

    braco.value = parseInt(braco.value) - 1;
});
*/

//robotron.addEventListener("click", dizOi);

/*
robotron.addEventListener("click", function (evento) {
    console.log(evento);
})

function dizOi() {

    console.log("oi");
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi();

*/