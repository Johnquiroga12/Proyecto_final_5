import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRegistrosRoutingModule } from './lista-registros-routing.module';
import { ListaRegistrosComponent } from './pages/lista-registros/lista-registros.component';
import { BuscarPipe } from './buscar.pipe';


@NgModule({
  declarations: [
    ListaRegistrosComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ListaRegistrosRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    ListaRegistrosComponent
  ]
})
export class ListaRegistrosModule { }
