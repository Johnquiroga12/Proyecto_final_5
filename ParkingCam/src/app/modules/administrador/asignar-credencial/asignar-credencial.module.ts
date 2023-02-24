import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignarCredencialRoutingModule } from './asignar-credencial-routing.module';
import { AsignarCredencialComponent } from './pages/asignar-credencial/asignar-credencial.component';


@NgModule({
  declarations: [
    AsignarCredencialComponent
  ],
  imports: [
    CommonModule,
    AsignarCredencialRoutingModule
  ],
  exports:[
    AsignarCredencialComponent
  ]
})
export class AsignarCredencialModule { }
