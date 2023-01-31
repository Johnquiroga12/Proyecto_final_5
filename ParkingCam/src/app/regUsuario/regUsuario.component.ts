import { Component, OnInit } from '@angular/core';
import { RegusuService } from '../Services/regusu.service';
import { Registro } from '../Services/Registro';
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
               this.router.navigate(['/login'])
        Swal.fire('llamta guardado',` usuario ${this.registro.nombre} guardado con exito`, 'success');
      }

    )
  }

}
