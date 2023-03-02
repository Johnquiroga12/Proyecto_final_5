import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/class/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService){ }

  ngOnInit(): void {
    
    this.usuarioService
    .getUsuarios()
    .subscribe((res) => (this.usuarios = res))
  }
}
