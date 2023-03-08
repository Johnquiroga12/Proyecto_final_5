import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  id: any;
  nombreUsuario: any;
  nombreRol: any;
  cedulaPerfil: any;
  celularPerfil: any;
  correoPerfil: any;
  jornadaPerfil: any;
  emergenciaPerfil: any;
  cargoPerfil: any;
  fotoPerfil: any;



  isSuperAdmin: boolean = false;


  displayMaximizable: any;
  isLogin: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    
    this.obtenerUsuario()
  }

  obtenerUsuario() {
    this.id = localStorage.getItem('id_usuario');
    if (this.id != '' && this.id != undefined) {
      this.usuarioService.getUsuario(this.id).subscribe((data) => {
        console.log(data);
        if (data != null) {
          this.isLogin = true;
  
          this.nombreUsuario = data.persona?.nombre + ' ' + data.persona?.apellido;
          this.nombreRol = data.rol;
          this.cedulaPerfil = data.persona?.cedula;
          this.correoPerfil = data.persona?.correo;
          this.celularPerfil = data.persona?.celular;
          this.emergenciaPerfil = data.persona?.n_emergencia;
          this.jornadaPerfil = data.persona?.jornada;
          this.cargoPerfil = data.persona?.cargo;
          this.fotoPerfil = data?.foto;

  
        } else {
          this.isLogin = false;
          this.nombreUsuario = 'NULL';
        }
      });
    }
  }
}
