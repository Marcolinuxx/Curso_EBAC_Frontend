const nomesMasculinos = [
    "Lucas", "Mateus", "Gustavo", "Guilherme", "Leonardo", "Rodrigo", "Felipe",
    "Eduardo", "João", "José", "Antônio", "Francisco", "Carlos", "Fábio", "Rafael",
    "Thiago", "Marcos", "Pedro", "Diego", "Anderson", "Fernando", "André", "Marcelo",
    "Samuel", "Vinícius", "Adriano", "Vitor", "Roberto", "Bruno", "Márcio",
    "Renato", "Juliano", "Renan", "Luiz", "Ronaldo", "Alexandre", "Ricardo",
    "Raphael", "Mauro", "Sérgio", "Paulo", "Bernardo", "Erick", "Luan", "Luciano"
];
const nomesFemininos = [
    "Ana", "Maria", "Carla", "Bianca", "Giovana", "Júlia", "Bruna", "Amanda",
    "Larissa", "Vanessa", "Talita", "Luana", "Débora", "Eduarda", "Juliana",
    "Gabriela", "Letícia", "Fernanda", "Andressa", "Mariana", "Isabela", "Mônica",
    "Patrícia", "Raquel", "Camila", "Lívia", "Aline", "Rafaela", "Daniela",
    "Michele", "Stefany", "Thais", "Márcia", "Caroline", "Ariane", "Nicole", "Andressa"
];

const form = document.querySelector("#form-aleatorio");
const resultado = document.querySelector(".resultado-texto");
const resultadoValor = document.querySelector("#resultado-valor");
const sexOption = document.querySelectorAll('.sex-option input[type="radio"]');
let nomeAleatorio = "";

function gerarNomeAleatorio(sexo) {
    let nomes;

    if (sexo === 'masculino') {
        nomes = nomesMasculinos;
    } else if (sexo === 'feminino') {
        nomes = nomesFemininos;
    } else {
        nomes = nomesMasculinos.concat(nomesFemininos);
    }

    const indexAleatorio = Math.floor(Math.random() * nomes.length);
    nomeAleatorio = nomes[indexAleatorio];
}

function exibirResultado() {
    resultadoValor.innerText = nomeAleatorio;
    resultado.style.display = "block";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const sexoSelecionado = [...sexOption].find(input => input.checked).value;
    gerarNomeAleatorio(sexoSelecionado);
    exibirResultado();
});