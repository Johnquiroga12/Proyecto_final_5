import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaVehiculosRoutingModule } from './lista-vehiculos-routing.module';
import { ListaVehiculosComponent } from './pages/lista-vehiculos/lista-vehiculos.component';


@NgModule({
  declarations: [
    ListaVehiculosComponent
  ],
  imports: [
    CommonModule,
    ListaVehiculosRoutingModule
  ],
  exports:[
    ListaVehiculosComponent
  ]
})
export class ListaVehiculosModule { }
