import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/services/class/registro';
import { ImpresionService } from 'src/app/services/impresion.service';
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
  page: number;


  constructor(private registroService: RegistroService,
    private srvImpresion: ImpresionService) { }

  ngOnInit(): void {


    setInterval(() => {
      this.listar();
    }, 1000);
  }

  listar() {
    this.registroService.Registro().subscribe(
      res => this.registros = res

    )
  }

  onImprimir() {

    const encabezado = ["ID Registro", "Fecha", "Marca", "Placa", "Propietario", "Cargo", "Hora", "Condición", "Observaciones"]
    
    const cuerpo = [

      
      ["1", "13/03/2023", "Entrada", "NA"],
      ["1", "13/03/2023", "Entrada", "NA"]

    ]; 
      

    this.srvImpresion.imprimir(encabezado, cuerpo, "Lista Registros", true);
  }


  act: string = 'D';
  ve: any;
  idMascotaDelete: any;

  descativar2(id: any) {
    // this.registroService.getRegistro(id).subscribe(data => {
    //   this.ve = data
    //   this.idMascotaDelete = this.ve.id_persona;
    //   console.log("ES LA ID -> " + this.ve.id_persona);
    //   this.ve.estado = this.act;
    //   this.registroService.desativar2(this.ve, id).subscribe(data => {
    //     console.log(data)
    //     Swal.fire(
    //       'Eliminado!',
    //       'se a elimino correctamente.',
    //       'success'
    //     )
    //     this.listar();

    //   })
    // })

  }


}
