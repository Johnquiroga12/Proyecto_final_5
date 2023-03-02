import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterVehiculoRoutingModule } from './register-vehiculo-routing.module';
import { RegisterVehiculoComponent } from './pages/register-vehiculo/register-vehiculo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterVehiculoComponent
  ],
  imports: [
    CommonModule,
    RegisterVehiculoRoutingModule,
    FormsModule
  ],
  exports: [
    RegisterVehiculoComponent
  ]
})
export class RegisterVehiculoModule { }
