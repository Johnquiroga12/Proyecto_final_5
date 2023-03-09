import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/class/user';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  
  
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
  
    if (!/^[a-zA-Z0-9]+$/.test(value) || value.length <6  ) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }

  public cedula = {
    cedulap: '',
  };

  public password = {
    password1: '',
    password2: '',
  };

  public statusActive: boolean = false;

  public valorUserLoggin: any;

  //Instancia de la clase Usuario
  public user: User = new User();

  constructor(private userS: UsuarioService,
    private router: Router) {}

  ngOnInit(): void {}

  public butttonOption() {
    if (this.user.id_usuario) {
      this.updatePassword();
    } else {
      this.getUserIsLoogin();
    }
  }

  public getUserIsLoogin() {
    if (this.cedula.cedulap == '' || this.cedula.cedulap == undefined) {
      Swal.fire({
        icon: 'warning',
        title: 'Porfavor, completa todos los campos requeridos',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      this.userS
        .getAccountByDesactivation(this.cedula.cedulap)
        .subscribe((data) => {
          if (data != null) {
            this.user = data;
            this.statusActive = true;
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Usuario Encontrado, ingrese sus nuevas credenciales.',
              showConfirmButton: false,
              timer: 1500
            })
          }
          console.log({ data: this.user });
        }, (err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Ingrese un dato válido.',
            showConfirmButton: false,
            timer: 1500,
          });
        });
        
    }
  }

  public updatePassword() {
    if (this.password.password1 === this.password.password2) {
      this.user.password = this.password.password1;
      this.userS
        .updateAccountByDesactivation(this.user.id_usuario, this.user)
        .subscribe(
          (data) => {
            Swal.fire({
              icon: 'success',
              title: 'El proceso ha sido ejecutado correctamente',
              showConfirmButton: false,
            });

            setTimeout(() => {
              this.routerNavigateLogin()
            }, 2000);
            // alert('birn');
          },
          (err) => {
            alert('mal');
          }
        );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Las contraseñas no coinciden.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  public routerNavigateLogin() {
    this.router.navigate(['/auth/login']).then(() => {
      window.location.reload();
    });
  }
}
