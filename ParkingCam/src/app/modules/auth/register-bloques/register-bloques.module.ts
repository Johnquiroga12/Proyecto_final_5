import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterBloquesRoutingModule } from './register-bloques-routing.module';
import { RegisterBloquesComponent } from './pages/register-bloques/register-bloques.component';


@NgModule({
  declarations: [
    RegisterBloquesComponent
  ],
  imports: [
    CommonModule,
    RegisterBloquesRoutingModule,
    FormsModule
  ],
  exports: [
    RegisterBloquesComponent
  ]
})
export class RegisterBloquesModule { }
