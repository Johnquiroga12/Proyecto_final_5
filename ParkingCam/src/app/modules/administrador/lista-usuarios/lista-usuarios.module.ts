import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuariosRoutingModule } from './lista-usuarios-routing.module';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { FormsModule } from '@angular/forms';
import { BuscarPipe } from './buscar.pipe';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ListaUsuariosRoutingModule,
    FormsModule
  ],
  exports: [
    ListaUsuariosComponent
  ]
})
export class ListaUsuariosModule { }
