import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/services/class/persona';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  sumatotal=0;
  persona = new Persona();
  perso: Persona[] = [];
  getclientes: Persona[] = [];
dataname: boolean=false;
  
  tableIndex = 0;

  constructor(private regperso: PersonaService,   private router: Router, private acrouter: ActivatedRoute) { }

  ngOnInit() {
    this.cargar();
    
  }
  createPersona(){
    return this.regperso.savePersona(this.persona).subscribe(
      res => {
        this.router.navigate(['/administrador/lista-personas'])
      console.log(res)
    },

    err => console.error(err)
    
    )
  }

  cargar(): void {
    this.acrouter.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.dataname = true;
        this.regperso.getPersona(id).subscribe((cliente) => this.persona = cliente)
      }
    })
  }
}
