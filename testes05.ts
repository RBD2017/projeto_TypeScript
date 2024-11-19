// Classe Radio
class Radio {
    private frequencia: number;
    
    constructor(frequencia: number) {
        this.frequencia = frequencia;
    }
    
    public ligar() {
        console.log(`Rádio ligado na frequência ${this.frequencia} MHz.`);
    }
    
    public setFrequencia(frequencia: number) {
        this.frequencia = frequencia;
    }
}

// Classe Carro
class Carro {
     modelo: string;
     radio: Radio;
    
    constructor(modelo: string, radio: Radio) {
        this.modelo = modelo;
        this.radio = radio;
    }
    
    public ligarRadio() {
        console.log(`Ligando o rádio do carro ${this.modelo}:`);
        this.radio.ligar();
    }
    
    public trocarRadio(novoRadio: Radio) {
        this.radio = novoRadio;
    }
}

// Criando um objeto Radio
const radioDeFabrica = new Radio(104.3);

// Criando um objeto Carro com o mesmo Radio
const carro1 = new Carro('Civic', radioDeFabrica);

// Usando o Radio com o Carro
carro1.ligarRadio();

// Alterando a frequência do Radio
radioDeFabrica.setFrequencia(88.8);
carro1.ligarRadio();

// Criando um novo Carro com o mesmo Radio
const carro2 = new Carro('Corolla', radioDeFabrica);
carro2.ligarRadio();
