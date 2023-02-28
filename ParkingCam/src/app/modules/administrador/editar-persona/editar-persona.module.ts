import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarPersonaRoutingModule } from './editar-persona-routing.module';
import { EditarPersonaComponent } from './pages/editar-persona/editar-persona.component';


@NgModule({
  declarations: [
    EditarPersonaComponent
  ],
  imports: [
    CommonModule,
    EditarPersonaRoutingModule,
    FormsModule
  ],
  exports: [
    EditarPersonaComponent
  ]
})
export class EditarPersonaModule { }
