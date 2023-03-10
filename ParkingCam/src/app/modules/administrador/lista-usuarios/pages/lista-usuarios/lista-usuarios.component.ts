import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/class/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  buscarTabla: '';
  page: number;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.usuarioService.getUsuarios().subscribe((res) => (this.usuarios = res))

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
        this.usuarioService.getUsuario(id).subscribe(data => {
          this.ve = data
          this.idMascotaDelete = this.ve.id_vehiculo;
          console.log("ES LA ID -> " + this.ve.id_vehiculo);
          this.ve.estado = this.act;
          this.usuarioService.desativar2(this.ve, id).subscribe(data => {
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
