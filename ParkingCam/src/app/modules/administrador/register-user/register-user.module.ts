import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUserRoutingModule } from './register-user-routing.module';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    FormsModule
  ],
  exports:[
    RegisterUserComponent
  ]
})
export class RegisterUserModule { }
