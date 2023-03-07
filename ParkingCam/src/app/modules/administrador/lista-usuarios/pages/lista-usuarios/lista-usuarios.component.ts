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

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.usuarioService.getUsuarios().subscribe((res) => (this.usuarios = res))

  }



  act: string = 'D';
  ve: any;
  idMascotaDelete: any;
  descativar2(id: any) {
    this.usuarioService.getUsuario(id).subscribe(data => {
      this.ve = data
      this.idMascotaDelete = this.ve.id_vehiculo;
      console.log("ES LA ID -> " + this.ve.id_vehiculo);
      this.ve.estado = this.act;
      this.usuarioService.desativar2(this.ve, id).subscribe(data => {
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
