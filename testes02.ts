abstract class rede{
    usuarios: string
    numero_usuarios: number
    constructor(usuarios: string,numero_usuario: number) {
        this.usuarios = usuarios
        this.numero_usuarios = numero_usuario
    }
    exito_rede(){
        console.log('usuarios cadastrados com sucesso');
        
    }

    abstract status():void
    
}
class conector extends rede{
    constructor(usuarios: string,numero_usuarios: number) {
        super(usuarios,numero_usuarios)
    }

    status(): void {
        console.log('status da rede okay');
        
    }
}

const api = new conector('fernando',78)

api.status();
console.log(api.usuarios);
console.log(api.numero_usuarios);
api.exito_rede();


