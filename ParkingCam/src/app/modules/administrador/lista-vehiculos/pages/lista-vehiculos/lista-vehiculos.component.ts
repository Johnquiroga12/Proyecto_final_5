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

  vehiculos: Vehiculo[] = [];
  listaVehi: '';
  page: number;

  constructor(private vehiculosService: VehiculoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.vehiculosService
      .Vehiculos()
      .subscribe((res) => (this.vehiculos = res));

  }
  act: string = 'D';
  ve: any;
  idMascotaDelete: any;
  descativar2(id: any) {
    // Se crea un objeto `swalWithBootstrapButtons` que se utilizará para personalizar los botones en la alerta
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    // Se llama a la función `fire` para mostrar la alerta de confirmación
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro de que desea eliminar esto?', // El título de la alerta
      text: "Esta acción no se puede deshacer", // El texto de la alerta
      icon: 'warning', // El icono de la alerta
      showCancelButton: true, // Indica que se deben mostrar los botones "OK" y "Cancelar"
      confirmButtonText: 'Sí, eliminarlo', // El texto del botón "OK"
      cancelButtonText: 'No, cancelar', // El texto del botón "Cancelar"
      reverseButtons: true // Invierte el orden de los botones para que el botón "Cancelar" aparezca primero
    }).then((result) => { // Se llama a esta función cuando el usuario hace clic en uno de los botones
      if (result.isConfirmed) { // Si el usuario hace clic en el botón "OK"
        this.vehiculosService.getVehiculo(id).subscribe(data => {
          this.ve = data
          this.idMascotaDelete = this.ve.id_vehiculo;
          console.log("ES LA ID -> " + this.ve.id_vehiculo);
          this.ve.estado = this.act;
          this.vehiculosService.desativar2(this.ve, id).subscribe(data => {
            console.log(data)
            Swal.fire(
              'Eliminado!',
              'Se ha eliminado correctamente.',
              'success'
            )
            this.listar();
          }, err => { // Si ocurre un error al eliminar la persona
            Swal.fire(
              'Error',
              'Ha ocurrido un error al eliminar la persona.',
              'error'
            )
          })
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) { // Si el usuario hace clic en el botón "Cancelar"
        swalWithBootstrapButtons.fire( // Se muestra un mensaje de error
          'Cancelado',
          'La persona no ha sido eliminada.',
          'error'
        );
      }
    });
  }

}
