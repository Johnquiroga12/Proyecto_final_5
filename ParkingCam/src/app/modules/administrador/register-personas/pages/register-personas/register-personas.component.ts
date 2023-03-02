import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/services/class/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register-personas',
  templateUrl: './register-personas.component.html',
  styleUrls: ['./register-personas.component.css']
})
export class RegisterPersonasComponent {

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
        this.router.navigate(['/administrador/lista-personas'])
      console.log(res)
    
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se a creado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    
      },

      err => console.error(err)
    )
  }
}
