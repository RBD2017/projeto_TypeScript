class cbf{
    pais: string
    constructor(pais: string) {
        this.pais = pais
    }

}

class campeonato{
    competicao: string
    constructor(competicao: string) {
        this.competicao = competicao
    }
}

class liga{
    lugar: cbf
    liga: campeonato
   

    constructor(lugar: cbf, liga: campeonato, ) {
        this.lugar = lugar
        this.liga = liga
        
        
    }
}

const cf = new cbf('brazil')
const cam = new campeonato('brasileirão') 

const ligas = new liga(cf,cam);

console.log(ligas);
