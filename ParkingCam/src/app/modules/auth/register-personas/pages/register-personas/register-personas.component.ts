import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/services/class/persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-personas',
  templateUrl: './register-personas.component.html',
  styleUrls: ['./register-personas.component.css']
})
export class RegisterPersonasComponent implements OnInit{

  persona: Persona = new Persona;
  listaPersonas: Persona[];
  
  constructor(private router: Router, private personaService: PersonaService){ }

  ngOnInit(): void {
    
    this.personaService.getPersonas().subscribe(
      listaPer => this.listaPersonas = listaPer
    );
  }

  createPersona(){
    return this.personaService.savePersona(this.persona).subscribe(
      res => {
        this.router.navigate(['/home/dashboard'])
      console.log(res)
      },

      err => console.error(err)
    )
  }
}
