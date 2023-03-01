
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/services/class/Persona';
import { Usuario } from 'src/app/services/class/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './/register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

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
        this.router.navigate(['/home/dashboard'])
      console.log(res)
      },

      err => console.error(err)
    )
  }


}
