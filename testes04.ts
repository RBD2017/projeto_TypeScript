class Jogador {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    toString(): string {
        return `Jogador(nome="${this.nome}", idade=${this.idade})`;
    }
}

class Time {
    jogadores: Jogador[] = []; // Lista para armazenar os jogadores

    adicionarJogador(jogador: Jogador): void {
        this.jogadores.push(jogador);
    }

    listarJogadores(): Jogador[] {
        return this.jogadores;
    }
}

// Criando jogadores
const jogador1 = new Jogador("Carlos", 25);
const jogador2 = new Jogador("Ana", 22);

// Criando um time e adicionando jogadores
const time = new Time();
time.adicionarJogador(jogador1);
time.adicionarJogador(jogador2);

// Listando jogadores do time
//console.log(time.listarJogadores().map(jogador => jogador.toString()));log

// Listando jogadores do time
time.listarJogadores().forEach(jogador => console.log(jogador.toString()));

