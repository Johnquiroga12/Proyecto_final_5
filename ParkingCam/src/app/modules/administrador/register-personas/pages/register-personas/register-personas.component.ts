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

  
  onKeyDown(event: KeyboardEvent) {
    this.onInputChange(event);
  }
  onInputChange(event: any) {
    const value = event.target.value;
    const input = event.target;
  
    if (!/^\d+$/.test(value) || value.length < 10) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }
  InputChange(event: any) {
    const value = event.target.value;
    const input = event.target;
  
    if (!/^\d+$/.test(value) || value.length < 6) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }


  persona: Persona = new Persona;
  listaPersonas: Persona[];
  
  constructor(private router: Router, private personaService: PersonaService){ }
  ngOnInit(): void {
    
    this.personaService.getPersonas().subscribe(
      listaPer => this.listaPersonas = listaPer
    );
  }

  createPersona(){

  if(this.persona.cedula === '' || this.persona.nombre === '' || this.persona.apellido === '' ||
    this.persona.correo === '' || this.persona.celular === '' || this.persona.n_emergencia === ''
    ||  this.persona.carrera=='' || this.persona.cargo=='' || this.persona.jornada===''
    ){

    console.log("Error");

    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'Complete todos los registros',
      showConfirmButton: false,
      timer: 1500
    })

    return null;
      
    }else{


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
}
