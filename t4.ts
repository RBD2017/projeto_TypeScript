class aviao {
    modelo: string
    constructor(modelo: string) {
        this.modelo = modelo
        
    }

   
    toString(): string {
        return `Avião do modelo ${this.modelo}`;
    }
}

class tipos_aviao{
    avioes: aviao[] = []


    adicionar_aviao(avioe: aviao): void{
        this.avioes.push(avioe);
    }

    lista_aviao():aviao[]
    {
        return this.avioes;
    }

    lista_caralho(){
        console.log('deu certo porra ve aí');
        
    }
}

const aviao1 = new aviao('emirates')
const aviao2 = new aviao('etihad')

const tipos_aviao1 = new tipos_aviao();

tipos_aviao1.adicionar_aviao(aviao1)

tipos_aviao1.lista_aviao().forEach(avioe => console.log(avioe.toString()));

tipos_aviao1.lista_caralho();

////vou deixar um revisão 


