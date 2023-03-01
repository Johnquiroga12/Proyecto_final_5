export class Registro{

    id_registro: string = "";
    fecha: string = "";
    hora_entrada: string = "";
    hora_salida: string = "";
    observaciones: string = "";

    bloque: Bloque | undefined;

    usuario: Usuario | undefined;

    vehiculo: Vehiculo | undefined;

}

interface Bloque{

    id_bloque: number;
    nombre: string;
    plazas: string;

}


interface Usuario{

    id_usuario: number;
    estado: string;
    password: string;
    rol: string;
    username: string;
    id_persona: number;

}

interface Vehiculo{

    id_vehiculo: number;
    color: string;
    estado: string;
    marca: string;
    modelo: string;
    placa: string;
    id_persona: number;

}