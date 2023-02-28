import { PersonaService } from "src/app/services/persona.service";
import { Component, OnInit } from '@angular/core';
import { Persona } from "src/app/services/class/persona";

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})

export class ListaPersonasComponent implements OnInit {

  personas : Persona[];

  constructor(private personasService: PersonaService) { }

  ngOnInit(): void {
    
    this.personasService.getPersonas().subscribe(
      res => this.personas = res
    )

    
  }

  eliminar(persona){
    this.personasService.deletePersona(persona).subscribe(
    )
  }

}

