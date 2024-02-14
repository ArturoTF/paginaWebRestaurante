export class User {
    id_Usuario!: number;
    nombre!:string;
    correo!:string;
    password!:string;

    public User(id_Usuario:number,nombre:string,correo:string,password:string){
        this.id_Usuario=id_Usuario;
        this.nombre=nombre;
        this.correo= correo;
        this.password=password;

    }
}
