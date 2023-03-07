import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BloqueService } from 'src/app/services/bloque.service';
import { Bloque } from 'src/app/services/class/bloque';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-bloques',
  templateUrl: './lista-bloques.component.html',
  styleUrls: ['./lista-bloques.component.css']
})
export class ListaBloquesComponent implements OnInit {

  bloques: Bloque[];
  listaBlo:'';


  constructor(private bloquesService: BloqueService) { }

  bloque: Bloque = new Bloque();

  ngOnInit(): void {

    this.listar();
  }

  listar() {
    this.bloquesService.bloque().subscribe(
      res => this.bloques = res
    )

  }
    
act:string='D';
ve:any;
idMascotaDelete:any;
descativar2(id: any) {
  this.bloquesService.getbloque(id).subscribe(data => {
    this.ve = data
    this.idMascotaDelete = this.ve.id_persona;
    console.log("ES LA ID -> " + this.ve.id_persona);
    this.ve.estado = this.act;
    this.bloquesService.desativar2(this.ve, id).subscribe(data => {
      console.log(data)
      Swal.fire(
        'Eliminado!',
        'se a elimino correctamente.',
        'success'
      )
      this.listar();
  
    })
  })
 
}


}
