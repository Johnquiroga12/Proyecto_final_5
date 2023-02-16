import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraVehiculoRoutingModule } from './registra-vehiculo-routing.module';
import { RegistraVehiculoComponent } from './pages/registra-vehiculo/registra-vehiculo.component';


@NgModule({
  declarations: [
    RegistraVehiculoComponent
  ],
  imports: [
    CommonModule,
    RegistraVehiculoRoutingModule
  ],

  exports: [
    RegistraVehiculoComponent
  ]
})
export class RegistraVehiculoModule { }
