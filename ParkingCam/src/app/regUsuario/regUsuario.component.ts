import { Component, OnInit } from '@angular/core';
import { RegusuService } from '../Services/regusu.service';
import { Registro } from '../Services/class/Usuarios';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-regUsuario',
  templateUrl: './regUsuario.component.html',
  styleUrls: ['./regUsuario.component.css']
})
export class RegUsuarioComponent implements OnInit {
  registro =new Registro();


   constructor(private registroserve:RegusuService, private router : Router) { }

  ngOnInit() {

  }
  
  public create(): void {
    this.registroserve.create(this.registro).subscribe(
      response => {
        Swal.fire('El ususario se a guardado',` usuario ${this.registro.username} guardado con exito`, 'success');
        this.router.navigate(['/login'])
      }

    )
  }

}
