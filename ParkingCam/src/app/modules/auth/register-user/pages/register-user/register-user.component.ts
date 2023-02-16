import  Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/Services/class/Usuarios';
import { RegusuService } from 'src/app/Services/regusu.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit{

  registro =new Registro();


   constructor(private registroserve:RegusuService, private router : Router) { }

  ngOnInit() {

  }

  public create(): void {
    this.registroserve.create(this.registro).subscribe(
      response => {
        Swal.fire('El ususario se a guardado',` usuario ${this.registro.username} guardado con exito`, 'success');
        this.router.navigate(['/auth/login'])
      }

    )
  }
  
}
