import { Persona } from "./persona";

export class User{
    
    id_usuario: number;
    username: string = "";
    password: string = "";
    rol: string = "";
    estado: string = "A";
    foto: string;
    persona: Persona;
}