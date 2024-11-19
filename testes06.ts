class jogador_futebol{
    public nome: string
     idade: number

    constructor(nome: string,idade: number){
        this.idade = idade
        this.nome = nome
        console.log('jogador irá se aprensetar e tem',this.idade,'e nome dele é',this.nome);
        
        
    }


}

class clube_futebol{
    jogador: jogador_futebol
    numeros_jogadores: number

    constructor(numeros_jogadores: number, jogador: jogador_futebol){
        this.numeros_jogadores = numeros_jogadores
        this.jogador = jogador

    }

    
    
}

const jogadores = new jogador_futebol('luan',25)

const clubes = new  clube_futebol(45,jogadores);

const jogador2 = new jogador_futebol('alisson',30)
const jogador3 = new jogador_futebol('neymar',36)
//console.log(clubes);

console.log(jogadores);
console.log(jogador2);
console.log(jogador3);



