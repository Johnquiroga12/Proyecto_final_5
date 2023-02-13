import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';
import { CreateAccountService } from '../Services/createaccount.service';
//Importamos la libreria de sweetaler2
import Swal from 'sweetalert2';
//Import de las rutas..
import { Router } from '@angular/router';
@Component({
  selector: 'app-login_p',
  templateUrl: './login_p.component.html',
  styleUrls: ['./login_p.component.css']
})

export class Login_pComponent implements OnInit {
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
          this.router.navigate(['/pag_prin']).then(() => { window.location.reload(); });
        }
      },
    });
  }

}