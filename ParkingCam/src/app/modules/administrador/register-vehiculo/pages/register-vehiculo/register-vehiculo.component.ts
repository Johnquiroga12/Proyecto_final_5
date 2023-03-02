import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/services/class/persona';
import { Vehiculo } from 'src/app/services/class/vehiculo';
import { PersonaService } from 'src/app/services/persona.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-register-vehiculo',
  templateUrl: './register-vehiculo.component.html',
  styleUrls: ['./register-vehiculo.component.css']
})
export class RegisterVehiculoComponent implements OnInit{

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
    return this.vehiculoService.saveVehiculo(this.vehiculo).subscribe(
      res => {
        this.router.navigate(['/home/dashboard'])
      console.log(res)
      },

      err => console.error(err)
    )
  }
}
