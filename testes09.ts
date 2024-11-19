//composição

class Motor {
    constructor(private tipo: string) {}

    ligar(): void {
        console.log(`O motor ${this.tipo} está ligado.`);
    }

    desligar(): void {
        console.log(`O motor ${this.tipo} está desligado.`);
    }
}

class Roda {
    constructor(private tamanho: number) {}

    girar(): void {
        console.log(`A roda de tamanho ${this.tamanho} está girando.`);
    }
}

class Carro {
    private motor: Motor;
    private rodas: Roda[];

    constructor(tipoMotor: string, tamanhoRodas: number, numeroRodas: number) {
        this.motor = new Motor(tipoMotor);
        this.rodas = Array.from({ length: numeroRodas }, () => new Roda(tamanhoRodas));
    }

    ligar(): void {
        this.motor.ligar();
        this.rodas.forEach(rodas => rodas.girar());
    }

    desligar(): void {
        this.motor.desligar();
    }
}

const meuCarro = new Carro('V8', 18, 4);
meuCarro.ligar(); // O motor V8 está ligado. / A roda de tamanho 18 está girando.
meuCarro.desligar(); // O motor V8 está desligado.
