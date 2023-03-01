import { Component,OnInit } from '@angular/core';
import { Persona } from 'src/app/services/class/persona';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-registra-personal',
  templateUrl: './registra-personal.component.html',
  styleUrls: ['./registra-personal.component.css']
})
export class RegistraPersonalComponent{

  personaLista: Persona[] = [];

  constructor(private ClasesPersonas: PersonaService){ }


  ngOnInit(): void {

    this.getClasesPersona();
  }



  getClasesPersona(){
    this.ClasesPersonas.getPersonas().subscribe(data => {
      this.personaLista = data;
    });}

}
