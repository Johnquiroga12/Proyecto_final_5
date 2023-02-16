import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraPersonasRoutingModule } from './registra-personas-routing.module';
import { RegistraPersonasComponent } from './pages/registra-personas/registra-personas.component';


@NgModule({
  declarations: [
    RegistraPersonasComponent
  ],
  imports: [
    CommonModule,
    RegistraPersonasRoutingModule
  ],

  exports:[
    RegistraPersonasComponent
  ]
})
export class RegistraPersonasModule { }
