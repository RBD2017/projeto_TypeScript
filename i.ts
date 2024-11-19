abstract class Gato {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    gatosFeliz() {
        console.log('Os gatos estão felizes');
    }
}

class Filho extends Gato {
    filho: string;

    constructor(nome: string, idade: number, filho: string) {
        super(nome, idade);
        this.filho = filho;
    }
}

const gb = new Filho('Lucas', 89, 'Miguel');

console.log(gb.nome);
console.log(gb.idade);
console.log(gb.filho);
gb.gatosFeliz();
