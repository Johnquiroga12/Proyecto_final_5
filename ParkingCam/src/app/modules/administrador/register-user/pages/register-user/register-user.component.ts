import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/services/class/persona';
import { Usuario } from 'src/app/services/class/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  usuario: Usuario = new Usuario;
  listaPersonas : Persona[];
  listaUsuarios: Usuario[];

  constructor(private router: Router, private usuarioService: UsuarioService,
    private personaService: PersonaService){} 
  ngOnInit(): void {
    
    this.usuarioService.getUsuarios().subscribe(
      listaV => this.listaUsuarios = listaV
    );

    this.personaService.getPersonas().subscribe(
      lista => this.listaPersonas = lista
    );
  }
  
  createUsuario(){
    
    return this.usuarioService.saveUsuario(this.usuario).subscribe(
      res => {
        this.router.navigate(['/administrador/lista-usuarios'])
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
