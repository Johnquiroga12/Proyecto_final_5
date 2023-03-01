import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPersonasRoutingModule } from './lista-personas-routing.module';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';


@NgModule({
  declarations: [
    ListaPersonasComponent
  ],
  imports: [
    CommonModule,
    ListaPersonasRoutingModule
  ],

  exports: [
    ListaPersonasComponent
  ]
})
export class ListaPersonasModule { }
