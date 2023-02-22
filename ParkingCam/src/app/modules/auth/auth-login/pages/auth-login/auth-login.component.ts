import { StorageService } from './../../../../../Services/storage.service';
import { CreateAccountService } from './../../../../../Services/createaccount.service';
import { Component, OnInit } from '@angular/core';

//Importamos la libreria de sweetaler2
import Swal from 'sweetalert2';
//Import de las rutas..
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit{

  datos = {
    correo: '',
    contrasenia: '',
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: CreateAccountService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
      //  this.isLoggedIn = true;
      //    this.roles = this.storageService.getUser().roles;
    }
  }

  login() {

    this.authService.login(this.datos.correo!, this.datos.contrasenia!).subscribe({
      next: (data) => {
        
        if (!data) {
          Swal.fire(
            'Cuenta no registrada',
            `La cuenta no esta registrada en el sistema`,
            'error'
          );
        } else {
     //     this.storageService.saveUser(data);
   //       this.isLoginFailed = false;
 //         this.isLoggedIn = true;
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Tamos dentro del sistema, credenciales correctas!!!',
            showConfirmButton: false,
            timer: 2000,
          });
          location.replace('/administrador')
        //  this.router.navigate(['/administrador']).then(() => { window.location.reload(); });
        }
      },
    });
  }

}
