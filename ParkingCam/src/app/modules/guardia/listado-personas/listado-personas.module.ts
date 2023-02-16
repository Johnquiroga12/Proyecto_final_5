import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoPersonasRoutingModule } from './listado-personas-routing.module';
import { ListadoPersonasComponent } from './pages/listado-personas/listado-personas.component';


@NgModule({
  declarations: [
    ListadoPersonasComponent
  ],
  imports: [
    CommonModule,
    ListadoPersonasRoutingModule
  ],
  exports:[
    ListadoPersonasComponent
  ]
})
export class ListadoPersonasModule { }
