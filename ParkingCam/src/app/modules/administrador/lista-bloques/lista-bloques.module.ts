import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaBloquesRoutingModule } from './lista-bloques-routing.module';
import { ListaBloquesComponent } from './pages/lista-bloques/lista-bloques.component';
import { BuscarPipe } from './buscar.pipe';


@NgModule({
  declarations: [
    ListaBloquesComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ListaBloquesRoutingModule,
    FormsModule
  ],
  exports: [
    ListaBloquesComponent
  ]
})
export class ListaBloquesModule { }
