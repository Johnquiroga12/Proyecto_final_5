export class Vehiculo {
  
  id_vehiculo: number;
  placa: string = '';
  marca: string = '';
  modelo: string = '';
  color: string = '';
   estado:string='A';
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
