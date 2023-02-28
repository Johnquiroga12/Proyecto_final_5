import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRegistrosRoutingModule } from './lista-registros-routing.module';
import { ListaRegistrosComponent } from './pages/lista-registros/lista-registros.component';


@NgModule({
  declarations: [
    ListaRegistrosComponent
  ],
  imports: [
    CommonModule,
    ListaRegistrosRoutingModule,
    FormsModule
  ],
  exports:[
    ListaRegistrosComponent
  ]
})
export class ListaRegistrosModule { }
