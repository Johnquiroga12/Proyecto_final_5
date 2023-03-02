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
  
  vehiculos: Vehiculo[];

  constructor(private vehiculosService: VehiculoService) {}

  ngOnInit(): void {
  this.listar();
  }
  
  listar(){
    this.vehiculosService
      .getVehiculos()
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
 
}
