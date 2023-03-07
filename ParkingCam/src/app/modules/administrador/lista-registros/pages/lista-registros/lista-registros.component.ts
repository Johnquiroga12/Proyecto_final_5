import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/services/class/registro';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {

  registros: Registro[];
  buscarTabla = '';

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.registroService.Registro().subscribe(
      res => this.registros = res
    )
  }


  act: string = 'D';
  ve: any;
  idMascotaDelete: any;
  
  descativar2(id: any) {
    this.registroService.getRegistro(id).subscribe(data => {
      this.ve = data
      this.idMascotaDelete = this.ve.id_persona;
      console.log("ES LA ID -> " + this.ve.id_persona);
      this.ve.estado = this.act;
      this.registroService.desativar2(this.ve, id).subscribe(data => {
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
