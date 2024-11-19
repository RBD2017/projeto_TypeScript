class Brazil {
    estado: string;
    cidade: string;
    municipio: string;

    constructor(estado: string, cidade: string, municipio: string) {
        this.estado = estado;
        this.cidade = cidade;
        this.municipio = municipio;
    }

    verificar_estado() {
       
        if (this.estado === 'SP' || this.estado === 'MG') {
            console.log('Esse estado é foda:', this.estado);
        } else {
            console.error('Erro: Estado inválido');
        }
    }

    verificar_cidade() {
        
        if (this.cidade === 'Petrolina' || this.cidade === 'Natal') {
            console.log('Esta cidade é maravilhosa:', this.cidade);
        } else { 
            console.error('Erro: Cidade inválida');
        }
    }

    municipal() {
        console.log('Esse município é pobre:', this.municipio);
    }
}

const pais = new Brazil('SP', 'Natal', 'Picos');

pais.verificar_cidade();
pais.verificar_estado();
pais.municipal();
