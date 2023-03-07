import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/services/class/login';
import { Usuario } from 'src/app/services/class/usuario';
import { LoginService } from 'src/app/services/login.service';
import { LoginI } from 'src/app/services/modelo/login.interface';

 import Swal from 'sweetalert2';
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

login = new LoginUsuario();
usuar = new Usuario();
json = "";
iRol = "";

loginForm = new FormGroup({
  usuario: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
})

  constructor(private api: LoginService, private router: Router) { }

  ngOnInit(): void {

  }
  public onLogin(): void{
    if (!this.login.username || !this.login.password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese su usuario y contraseña válidos',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    this.api.getCurrentUser(this.login).subscribe((data) => {
      this.json = JSON.stringify(data);
      this.usuar = JSON.parse(this.json);
  
      if (this.usuar != null){
        if (this.usuar.username === this.login.username && this.usuar.password === this.login.password) {
          this.iRol = this.usuar.rol;
  
          localStorage.setItem('id_usuario', String(this.usuar.id_usuario));

          if(this.iRol == "Administrador"){
            this.router.navigate(['home/dashboard']);
          }
          else if(this.iRol == "Secretaria"){
            this.router.navigate(['home/dashboard']);
          }
          else if(this.iRol == "Guardia"){
            this.router.navigate(['home/dashboard']);
          }
          Swal.fire({
            icon: 'success',
            title: 'Ingreso Realizado Correctamente',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Credenciales Incorrectas, Intentelo Nuevamente',
            showConfirmButton: false,
            timer: 1500
          
          });
        }
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: ' Verifique su Usuario o contraseña',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

}
