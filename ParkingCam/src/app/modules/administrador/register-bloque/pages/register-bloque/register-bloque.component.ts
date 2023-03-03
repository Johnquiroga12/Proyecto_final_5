import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bloque } from 'src/app/services/class/bloque';
import { BloqueService } from 'src/app/services/bloque.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register-bloque',
  templateUrl: './register-bloque.component.html',
  styleUrls: ['./register-bloque.component.css']
})
export class RegisterBloqueComponent implements OnInit{

  bloque: Bloque = new Bloque;

  constructor(private router: Router, private bloqueService: BloqueService) {}

  ngOnInit(): void {
    
  }

  createBloque(){
    return this.bloqueService.saveBloque(this.bloque).subscribe(
      res => {
        this.router.navigate(['/administrador/lista-bloques'])
        console.log(res)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se a creado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },

      err => console.error(err)
    )
  }
}
