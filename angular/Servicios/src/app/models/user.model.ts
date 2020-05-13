export class User {

    nombre: string;
    apellidos: string;
    username: string;
    password: string;
    email: string;
    edad: number;
    activo: boolean;

    constructor(nombre: string, apellidos: string, username: string, password: string, email: string, edad: number, activo: boolean) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.username = username;
        this.password = password;
        this.email = email;
        this.edad = edad;
        this.activo = activo;
    }

}