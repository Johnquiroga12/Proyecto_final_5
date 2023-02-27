import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleVehiculosRoutingModule } from './detalle-vehiculos-routing.module';
import { DetalleVehiculosComponent } from './pages/detalle-vehiculos/detalle-vehiculos.component';

@NgModule({
  declarations: [
    DetalleVehiculosComponent
  ],
  imports: [
    CommonModule,
    DetalleVehiculosRoutingModule
  ],
  exports: [
    DetalleVehiculosComponent
  ]
})
export class DetalleVehiculosModule { }
