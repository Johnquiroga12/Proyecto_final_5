import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRegistrosRoutingModule } from './detalle-registros-routing.module';
import { DetalleRegistrosComponent } from './pages/detalle-registros/detalle-registros.component';


@NgModule({
  declarations: [
    DetalleRegistrosComponent
  ],
  imports: [
    CommonModule,
    DetalleRegistrosRoutingModule,
    FormsModule
  ],
  exports: [
    DetalleRegistrosComponent
  ]
})
export class DetalleRegistrosModule { }
