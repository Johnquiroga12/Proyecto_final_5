import { Component,OnInit } from '@angular/core';
import { Persona } from 'src/app/services/class/persona';
import { Vehiculo } from 'src/app/services/class/vehiculo';
import { PersonaService } from 'src/app/services/persona.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
@Component({
  selector: 'app-registra-personal',
  templateUrl: './registra-personal.component.html',
  styleUrls: ['./registra-personal.component.css']
})
export class RegistraPersonalComponent{

  personaLista: Persona[] = [];
  vehiculoLista: Vehiculo[] = [];

  constructor(private ClasesPersonas: PersonaService,
    private ClasesVehiculo: VehiculoService){ }


  ngOnInit(): void {

    this.getClasesPersona();
  }



  getClasesPersona(){
    this.ClasesPersonas.getPersonas().subscribe(data => {
      this.personaLista = data;
    });}

    getClasesVehiculo(){
      this.ClasesVehiculo.getVehiculos().subscribe(data => {
        this.vehiculoLista = data;
      });}

}
