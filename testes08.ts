
class Clube{
    
    clube: string
    constructor(clube: string) {
        //this.Jogadores = Jogadores
        this.clube = clube
        //console.log('o ',this.clube,'o maior clube do mundo');
    }

    
}

class Jogador {
    clube: Clube
    nome_atleta: string
    idade_atleta: number
    constructor(clube: Clube,nome_atleta: string, idade_atleta: number) {
        this.clube = clube
        this.nome_atleta = nome_atleta
        this.idade_atleta = idade_atleta
       
        
    }
    verificar(){
        console.log('o jogador mais perfeito do',this.clube,'se chama',this.nome_atleta,'e ele tem ',this.idade_atleta,'anos');
    }
}

const nome_clube = new Clube('Real Madrid');

const nome_jogador = new Jogador(nome_clube,'Ibrahim Diaz',27);

const nome_jogador2 = new Jogador(nome_clube,'Hazard',28);

console.log(nome_jogador);
console.log(nome_jogador2);





