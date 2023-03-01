import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPersonasRoutingModule } from './register-personas-routing.module';
import { RegisterPersonasComponent } from './pages/register-personas/register-personas.component';


@NgModule({
  declarations: [
    RegisterPersonasComponent
  ],
  imports: [
    CommonModule,
    RegisterPersonasRoutingModule,
    FormsModule
  ],
  exports:[
    RegisterPersonasComponent
  ]
})
export class RegisterPersonasModule { }
