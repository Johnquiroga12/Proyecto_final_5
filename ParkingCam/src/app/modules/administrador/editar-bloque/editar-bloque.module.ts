import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarBloqueRoutingModule } from './editar-bloque-routing.module';
import { EditarBloqueComponent } from './pages/editar-bloque/editar-bloque.component';


@NgModule({
  declarations: [
    EditarBloqueComponent
  ],
  imports: [
    CommonModule,
    EditarBloqueRoutingModule,
    FormsModule
  ],
  exports:[
    EditarBloqueComponent
  ]
})
export class EditarBloqueModule { }
