import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarUserRoutingModule } from './editar-user-routing.module';
import { EditarUserComponent } from './pages/editar-user/editar-user.component';


@NgModule({
  declarations: [
    EditarUserComponent
  ],
  imports: [
    CommonModule,
    EditarUserRoutingModule
  ],
  exports: [
    EditarUserComponent
  ]
})
export class EditarUserModule { }
