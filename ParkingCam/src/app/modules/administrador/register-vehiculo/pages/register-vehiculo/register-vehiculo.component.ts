import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/services/class/persona';
import { Vehiculo } from 'src/app/services/class/vehiculo';
import { PersonaService } from 'src/app/services/persona.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register-vehiculo',
  templateUrl: './register-vehiculo.component.html',
  styleUrls: ['./register-vehiculo.component.css']
})
export class RegisterVehiculoComponent implements OnInit{

  onKeyDown(event: KeyboardEvent) {
    this.InputChange(event);
  } 
   InputChange(event: any) {
    const value = event.target.value;
    const input = event.target;
  
    if (!/^[a-zA-Z0-9]+$/.test(value) || value.length <6 ) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }  


  vehiculo: Vehiculo = new Vehiculo;
  listaPersonas : Persona[];
  listaVehiculo : Vehiculo[];


  constructor(private router: Router, private vehiculoService: VehiculoService,
    private personaService: PersonaService){}

  ngOnInit(): void {
    
    this.vehiculoService.getVehiculos().subscribe(
      listaV => this.listaVehiculo = listaV
    );

    this.personaService.getPersonas().subscribe(
      lista => this.listaPersonas = lista
    );
  }

  createVehiculo(){
    
  if(this.vehiculo.color === '' || this.vehiculo.ticket === '' || this.vehiculo.marca === '' ||
  this.vehiculo.modelo === '' || this.vehiculo.placa ==='' || !this.vehiculo.persona ){

  console.log("Error");

  Swal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'Complete todos los registros',
    showConfirmButton: false,
    timer: 1500
  })

  return null;
    
  }else{


    return this.vehiculoService.saveVehiculo(this.vehiculo).subscribe(
      res => {
        this.router.navigate(['/administrador/lista-vehiculos'])
      console.log(res)
            Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se a creado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    
      },

      err => console.error(err)
    )
  }
  }


  validaTicket(){

    if(!this.vehiculoService.getVehiculo(this.vehiculo.id_vehiculo)){
      console.log('Vehiculo Encontrado');
    }else{
      this.createVehiculo();
    }

  }

}
