import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaVehiculosRoutingModule } from './lista-vehiculos-routing.module';
import { ListaVehiculosComponent } from './pages/lista-vehiculos/lista-vehiculos.component';
import { BuscarPipe } from './buscar.pipe';


@NgModule({
  declarations: [
    ListaVehiculosComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ListaVehiculosRoutingModule,
    FormsModule
  ],
  exports:[
    ListaVehiculosComponent
  ]
})
export class ListaVehiculosModule { }
