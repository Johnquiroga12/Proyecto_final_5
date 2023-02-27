import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/services/class/persona';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detalle-personas',
  templateUrl: './detalle-personas.component.html',
  styleUrls: ['./detalle-personas.component.css']
})
export class DetallePersonasComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaService) { }

  persona : Persona = new Persona();

  ngOnInit(): void {
    
    this.detallesPersona()
  }

  detallesPersona() {
    this.activatedRoute.params.subscribe(

      params => {
        
        let id = params['id']
        if(id){
          this.personaService.getPersona(id).subscribe(
            (persona) => this.persona = persona
          )
        }
      }

    )


  }

}

