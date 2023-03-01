import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarVehiculoRoutingModule } from './editar-vehiculo-routing.module';
import { EditarVehiculoComponent } from './pages/editar-vehiculo/editar-vehiculo.component';


@NgModule({
  declarations: [
    EditarVehiculoComponent
  ],
  imports: [
    CommonModule,
    EditarVehiculoRoutingModule,
    FormsModule
  ],
  exports:[
    EditarVehiculoComponent
  ]
})
export class EditarVehiculoModule { }
