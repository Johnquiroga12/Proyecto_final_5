import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterBloqueRoutingModule } from './register-bloque-routing.module';
import { RegisterBloqueComponent } from './pages/register-bloque/register-bloque.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterBloqueComponent
  ],
  imports: [
    CommonModule,
    RegisterBloqueRoutingModule,
    FormsModule
  ],
  exports: [
    RegisterBloqueComponent
  ]
})
export class RegisterBloqueModule { }
