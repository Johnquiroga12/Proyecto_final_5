
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/services/class/persona';

@Component({
  selector: 'app-register-user',
  templateUrl: './/register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

  persona: Persona = new Persona;

  constructor(private router: Router, private personaService: PersonaService){} 
  ngOnInit(): void {
    
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
