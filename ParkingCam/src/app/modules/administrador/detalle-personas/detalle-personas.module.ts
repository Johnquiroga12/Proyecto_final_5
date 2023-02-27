import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallePersonasRoutingModule } from './detalle-personas-routing.module';
import { DetallePersonasComponent } from './pages/detalle-personas/detalle-personas.component';


@NgModule({
  declarations: [
    DetallePersonasComponent
  ],
  imports: [
    CommonModule,
    DetallePersonasRoutingModule
  ],

  exports: [
    DetallePersonasComponent
  ]
})
export class DetallePersonasModule { }
