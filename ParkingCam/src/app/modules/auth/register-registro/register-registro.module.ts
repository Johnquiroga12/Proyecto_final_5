import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRegistroRoutingModule } from './register-registro-routing.module';
import { RegisterRegistroComponent } from './pages/register-registro/register-registro.component';


@NgModule({
  declarations: [
    RegisterRegistroComponent
  ],
  imports: [
    CommonModule,
    RegisterRegistroRoutingModule,
    FormsModule
  ],
  exports: [
    RegisterRegistroComponent
  ]
})
export class RegisterRegistroModule { }
