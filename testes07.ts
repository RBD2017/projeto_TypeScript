class Concessionaria{
    
    endereco: string
    constructor( endereco: string) {
        
        this.endereco = endereco
    }

    lista(){
        console.log('o endereço da concessioanria fica',this.endereco);
        
    }
}


class Carros{
    concessionaria: Concessionaria
    nome: string
    ano_modelo: number
    constructor(concessionaria: Concessionaria,nome: string, ano_modelo: number){
        this.concessionaria = concessionaria
        this.nome = nome
        this.ano_modelo = ano_modelo
        
    }

   
}

const con = new Concessionaria('Rua oslavdo')

const carrao = new Carros(con,'bmw',2002,)

const carrao2 = new Carros(con,'mercedes',2005)

const carrao3 = new Carros(con,'ferrari',2000)

console.log(carrao);

console.log(carrao2);

console.log(carrao3);





