import { Component,OnInit } from '@angular/core';
import  Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/services/class/persona';
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
