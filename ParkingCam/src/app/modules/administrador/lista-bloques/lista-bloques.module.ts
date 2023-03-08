import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaBloquesRoutingModule } from './lista-bloques-routing.module';
import { ListaBloquesComponent } from './pages/lista-bloques/lista-bloques.component';
import { BuscarPipe } from './buscar.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListaBloquesComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ListaBloquesRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListaBloquesComponent
  ]
})
export class ListaBloquesModule { }
