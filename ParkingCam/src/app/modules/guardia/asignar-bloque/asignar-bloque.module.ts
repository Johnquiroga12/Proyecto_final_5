import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignarBloqueRoutingModule } from './asignar-bloque-routing.module';
import { AsignarBloqueComponent } from './pages/asignar-bloque/asignar-bloque.component';


@NgModule({
  declarations: [
    AsignarBloqueComponent
  ],
  imports: [
    CommonModule,
    AsignarBloqueRoutingModule
  ],

  exports:[
    AsignarBloqueComponent
  ]
})
export class AsignarBloqueModule { }
