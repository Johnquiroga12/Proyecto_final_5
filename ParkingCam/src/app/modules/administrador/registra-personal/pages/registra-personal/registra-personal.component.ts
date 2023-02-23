import { Component,OnInit } from '@angular/core';
import { Registro } from 'src/app/Services/class/Usuarios';
import { RegusuService } from 'src/app/Services/regusu.service';
import  Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CreateAccountService } from 'src/app/Services/createaccount.service';
@Component({
  selector: 'app-registra-personal',
  templateUrl: './registra-personal.component.html',
  styleUrls: ['./registra-personal.component.css']
})
export class RegistraPersonalComponent implements OnInit{
  buscar='';
  sumatotal=0;
  
  registro =new Registro();


   constructor(private registroserve:RegusuService
, private router : Router
    ) { }

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
