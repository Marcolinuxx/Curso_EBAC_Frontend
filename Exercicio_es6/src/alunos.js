class Alunos {

    constructor(nomeDoAluno, materia, notas) {
        this.nomeDoAluno = nomeDoAluno;
        this.materia = materia;
        this.notas = notas;
    }

    calculaMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
        const media = somaNotas / this.notas.length;

        return {[this.nomeDoAluno]: {[this.materia]: media } };
    }
}

class Maria extends Alunos {
    constructor() {
        super('Maria', 'Geografia', [7, 6, 4]);
    }
}

const maria = new Maria();
const joaquim = new Alunos('Joaquim', 'Matemática', [10, 8, 9]);
const bernardo = new Alunos('Bernardo', 'Português', [7, 6, 8]); 

console.log(maria.calculaMedia()); 
console.log(joaquim.calculaMedia()); 
console.log(bernardo.calculaMedia());