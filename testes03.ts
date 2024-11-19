interface gabigol{
    clube: string
    gols_carreira: number
    titulos: number

    gabi(): void
}

class Flamengo  implements gabigol{
    clube: string;
    gols_carreira: number;
    titulos: number;
    gabi(): void {
        console.log('gabigol idolo do Flamengo fez',this.gols_carreira,'gols e ganhou',this.titulos,'titulos pelo Flamengo');
        
    }
    constructor(clube: string,gols_carreira:number,titulos:number){
        this.clube = clube
        this.gols_carreira = gols_carreira
        this.titulos = titulos
    }
}

class Santos implements gabigol{
    clube: string;
    gols_carreira: number;
    titulos: number;
    gabi(): void {
        console.log('gabigol idolo do Santos fez',this.gols_carreira,'gols e ganhou',this.titulos,'titulos pelo Santos');
        
    }
    constructor(clube: string, gol_carreira: number, titulo: number) {
        this.clube = clube
        this.gols_carreira = gol_carreira
        this.titulos = titulo
        
    }
}

const lil_gabi: gabigol = new Flamengo('flamengo',111,12);
const lil_gabi2: gabigol = new Santos('santos',42,2);


lil_gabi.gabi()

lil_gabi2.gabi();


