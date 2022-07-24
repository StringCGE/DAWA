export class Usuario {
    constructor(id?: number,
        cedula?: string,
        nombres?: string,
        apellidos?: string,
        direccion?: string,
        edad?: number,
        email?: string,
        psw?: string,
        roll?: string){
            this.id = id || -1;
            this.cedula = cedula || "";
            this.nombres = nombres || "";
            this.apellidos = apellidos || "";
            this.direccion = direccion || "";
            this.edad = edad || -1;
            this.email = email || "";
            this.psw = psw || "";
            this.roll = roll || "";
    }
    id: number;
    cedula: string;
    nombres: string;
    apellidos: string;
    direccion: string;
    edad: number;
    email: string;
    psw: string;
    roll: string;
}
