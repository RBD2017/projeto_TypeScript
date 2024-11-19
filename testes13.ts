import { PrimaryExpression } from "typescript";

class Cadastro_Usuario {
    nome: string;
    idade: number
    cpf: number 
    constructor(nome: string,idade: number,cpf: number) {
       this.nome = nome
       this.idade =idade
       this.cpf = cpf

    }

    lista_nome(){
        console.log('integrantes',this.nome);
        
    }

    exibir_idade(){
        console.log('idade dos integrantes',this.idade);
        
    }
}
class Saldo_Bancario_Cliente {
    Saldo_cliente: number
    constructor(Saldo: number) {
        this.Saldo_cliente = Saldo
    }
     verificar_saldo(){
        if (this.Saldo_cliente > 50){
            console.log('saldo okay');
            
        }
        if (this.Saldo_cliente < 20 ) {
            console.log('Saldo Insuficiente');
            
        }
     }
       
        
    }

class Cadastro_Produto {
    id: number
    Nome_Produto: string
    Valor: number
    constructor(id: number,Nome_Produto: string,Valor: number) {
        this.id = id
        this.Nome_Produto =Nome_Produto
        this.Valor = Valor
    }
}

class Exibir_Produtos extends Cadastro_Produto{
   constructor(id: number,Nome_Produto:string,Valor: number) {
    super(id,Nome_Produto,Valor)
   }

   Exibir_Detalhes_Produto(){
    console.log(this.id,this.Nome_Produto,this.Valor);
    
   }
}
class Selecionar_Produtos {
    id: number
    constructor(id: number) {
        this.id = id
    }

    
    }
class Verificar_Usuario extends Cadastro_Usuario{
    constructor(nome: string,idade: number,cpf: number) {
        super(nome,idade,cpf)
    }

    
}

const User = new Verificar_Usuario('Felipe',55,75656454655)
const saldo = new Saldo_Bancario_Cliente(100)
const produto = new Exibir_Produtos(1,'Pendrive',78)
const produto2 = new Exibir_Produtos(3,'fogão',456)


console.log(User);
saldo.verificar_saldo();
console.log(produto);
console.log(produto2);

