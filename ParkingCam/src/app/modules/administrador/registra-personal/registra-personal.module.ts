import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraPersonalRoutingModule } from './registra-personal-routing.module';
import { RegistraPersonalComponent } from './pages/registra-personal/registra-personal.component';


@NgModule({
  declarations: [
    RegistraPersonalComponent
  ],
  imports: [
    CommonModule,
    RegistraPersonalRoutingModule
  ],
  exports:[
    RegistraPersonalComponent
  ]
})
export class RegistraPersonalModule { }
