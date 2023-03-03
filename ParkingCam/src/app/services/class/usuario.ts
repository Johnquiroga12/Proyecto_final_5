export class Usuario{
    
    id_usuario: number;
    username: string = "";
    password: string = "";
    rol: string = "";
    estado: string = "A";
    persona: Persona | undefined;
}

interface Persona{

    id_persona: number;
      nombre: string ;
      apellido: string ;
      cedula: string ;
      correo: string ;
      cargo: string ;
      celular: string ;
      n_emergencia: string ;
      carrera: string ;
      jornada: string ;
  
  }