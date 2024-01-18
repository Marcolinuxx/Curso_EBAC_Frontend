function Time_deFutebol(nome, cidade) {
    this.nome = nome;
    this.cidade = cidade;
    this.elenco = [];

    this.contratarJogador = function (jogador) {
        this.elenco.push(jogador);
        console.log(`${jogador.nome} foi contratado pelo ${this.nome}, 
        da cidade de ${this.cidade}`);
    };

    this.realizarTreinamento = function () {
        console.log(`${this.nome} está realizando um treinamento.`);
    };
}

function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
}

function Jogador(nome, idade, posicao) {
    Pessoa.call(this, nome, idade);
    this.posicao = posicao;
}

Jogador.prototype.jogar = function () {
    console.log(`${this.nome} está jogando na posição de ${this.posicao}.`);
};

function Treinador(nome, idade, estrategia) {
    Pessoa.call(this, nome, idade);
    this.estrategia = estrategia;
    this.orientarTime = function () {
        console.log(`${this.nome} está orientando o time com a estratégia: ${this.estrategia}`);
    };
}


const santosFC = new Time_deFutebol("Santos FC", "Santos");

const neymar = new Jogador("Neymar Jr.", 31, "Atacante");
const giuliano = new Jogador("Giuliano", 33, "Atacante");
const diego_pituca = new Jogador("Diego Pituca", 31, "Meio-Campo");
const fabiocarille = new Treinador("Fábio Carille", 50, "Marcação direta");

santosFC.contratarJogador(neymar);
santosFC.contratarJogador(giuliano);
santosFC.contratarJogador(diego_pituca);

santosFC.realizarTreinamento();
neymar.jogar();
giuliano.jogar()
diego_pituca.jogar()
fabiocarille.orientarTime();

