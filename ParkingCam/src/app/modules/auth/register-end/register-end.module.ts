import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterEndRoutingModule } from './register-end-routing.module';
import { RegisterEndComponent } from './pages/register-end/register-end.component';


@NgModule({
  declarations: [
    RegisterEndComponent
  ],
  imports: [
    CommonModule,
    RegisterEndRoutingModule
  ],
  exports: [
    RegisterEndComponent
  ]
})
export class RegisterEndModule { }
