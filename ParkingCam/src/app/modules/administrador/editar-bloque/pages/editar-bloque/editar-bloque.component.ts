import { Component, OnInit } from '@angular/core';
import { Bloque } from 'src/app/services/class/bloque';
import { BloqueService } from 'src/app/services/bloque.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-bloque',
  templateUrl: './editar-bloque.component.html',
  styleUrls: ['./editar-bloque.component.css']
})
export class EditarBloqueComponent implements OnInit{

  bloque: Bloque = new Bloque;
  dataname: boolean=false;

  constructor(private router: Router, private bloqueService: BloqueService,private acrouter: ActivatedRoute) {}

  ngOnInit(): void {
   this.cargar(); 
  }

  editarbloque(){
  
    if(this.bloque.nombre === '' || this.bloque.plazas === ''  ){
  
      console.log("Error");
    
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Complete todos los registros',
        showConfirmButton: false,
        timer: 1500
      })
    
      return null;
        
      }else{

    return this.bloqueService.saveBloque(this.bloque).subscribe(
      res => {
        this.router.navigate(['/administrador/lista-bloques'])
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La edicion se a completado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
  
        console.log(res)
      },

      err => console.error(err)
    )
      }
  }

cargar(): void {
  this.acrouter.params.subscribe(params => {
    let id = params['id']
    if (id) {
      this.dataname = true;
      this.bloqueService.getbloque(id).subscribe((VEI) => this.bloque = VEI)
    }
  })
}


}


