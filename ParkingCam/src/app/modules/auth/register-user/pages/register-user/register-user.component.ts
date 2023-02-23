import  Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Services/class/Persona';
import { RegpersoService } from 'src/app/Services/regperso.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit{
  
  buscar='';
  sumatotal=0;
    persona = new Persona();
    perso: Persona[] = [];
  
  

   constructor(private router : Router,private regperso: RegpersoService 
    ) { }

  ngOnInit() {

  }

  
  Lista(): void {
    this.regperso.getmostrardatosperso().subscribe(
      Persona => this.perso = Persona
    );
  }
  guar() {
    if (this.persona.id_persona) {
      //     this.edit();
      this.regperso.editarp(this.persona.id_persona, this.persona)
        .subscribe(() => this.Lista());
      Swal.fire('El ususario se a modificado', ` usuario ${this.persona.nombre} guardado con exito`, 'success');
   //   this.lim(this.persona);
    } else {
      this.regperso.create(this.persona).subscribe(
        () => this.Lista(),


      )
      Swal.fire('El ususario se a guardado', ` usuario ${this.persona.nombre} guardado con exito`, 'success');
      //this.lim(this.persona);
    }
  }


}
