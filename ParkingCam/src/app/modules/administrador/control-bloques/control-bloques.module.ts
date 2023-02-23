import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlBloquesRoutingModule } from './control-bloques-routing.module';
import { ControlBloquesComponent } from './pages/control-bloques/control-bloques.component';


@NgModule({
  declarations: [
    ControlBloquesComponent
  ],
  imports: [
    CommonModule,
    ControlBloquesRoutingModule
  ],
  exports:[
    ControlBloquesComponent
  ]
})
export class ControlBloquesModule { }
