import { Persona } from 'src/app/services/class/persona';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detalle-personas',
  templateUrl: './detalle-personas.component.html',
  styleUrls: ['./detalle-personas.component.css']
})
export class DetallePersonasComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute) { }

  persona : Persona = new Persona();

  ngOnInit(): void {
    
  }

  detallesPersona() {
    this.activatedRoute.params.subscribe(

      params => {
        
      }

    )


  }

}

