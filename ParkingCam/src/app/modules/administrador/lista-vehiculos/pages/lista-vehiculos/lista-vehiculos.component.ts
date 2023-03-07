import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/services/class/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css'],
})
export class ListaVehiculosComponent implements OnInit {
  
  vehiculos: Vehiculo[]=[];
  listaVehi:'';

  constructor(private vehiculosService: VehiculoService) {}

  ngOnInit(): void {
  this.listar();
  }
  
  listar(){
    this.vehiculosService
      .Vehiculos()
      .subscribe((res) => (this.vehiculos = res));
  
  }    
  eliminar(persona){
    this.vehiculosService.delete(this.vehiculos).subscribe(
      res => {
      
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
this.listar();

      },
    )
  }

act:string='D';
  ve:any;
  idMascotaDelete:any;
  descativar2(id: any) {
    this.vehiculosService.getVehiculo(id).subscribe(data => {
      this.ve = data
      this.idMascotaDelete = this.ve.id_vehiculo;
      console.log("ES LA ID -> " + this.ve.id_vehiculo);
      this.ve.estado = this.act;
      this.vehiculosService.desativar2(this.ve, id).subscribe(data => {
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
