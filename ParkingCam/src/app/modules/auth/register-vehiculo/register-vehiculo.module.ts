import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterVehiculoRoutingModule } from './register-vehiculo-routing.module';
import { RegisterVehiculoComponent } from './pages/register-vehiculo/register-vehiculo.component';


@NgModule({
  declarations: [
    RegisterVehiculoComponent
  ],
  imports: [
    CommonModule,
    RegisterVehiculoRoutingModule
  ],
  exports: [
    RegisterVehiculoComponent
  ]
})
export class RegisterVehiculoModule { }
