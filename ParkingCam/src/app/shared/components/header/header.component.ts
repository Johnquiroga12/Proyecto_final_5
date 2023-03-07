import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  id: any;
  nombreUsuario: any;
  nombreRol: any;

  isSuperAdmin: boolean = false;

  displayMaximizable: any;
  isLogin: boolean = false;

  informacionUser: any;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.id = localStorage.getItem('id_usuario');
    if (this.id != '' && this.id != undefined) {
      this.usuarioService.getUsuario(this.id).subscribe((data) => {
        console.log(data);
        if (data != null) {
          this.isLogin = true;
          this.informacionUser = data;
          this.nombreUsuario =
            data.persona?.nombre + ' ' + data.persona?.apellido;
          this.nombreRol = data.rol;

          switch (data.rol) {
            case 'Administrador':
              this.isSuperAdmin = true;

              break;

            case 'Secretaria':
              this.isSuperAdmin = true;

              break;

            default:
              alert('Rol desconocido');
              break;
          }
        } else {
          this.isLogin = false;
          this.nombreUsuario = 'NULL';
        }
      });
    }
  }

  public logOut() {
    this.storage.clean();
    this.router.navigate(['/auth/login']).then(() => {
      window.location.reload();
    });
  }
}
