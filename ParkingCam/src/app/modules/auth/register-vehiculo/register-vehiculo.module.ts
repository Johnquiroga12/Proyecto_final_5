import { FormsModule } from '@angular/forms';
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
    RegisterVehiculoRoutingModule,
    FormsModule
  ],
  exports: [
    RegisterVehiculoComponent
  ]
})
export class RegisterVehiculoModule { }
