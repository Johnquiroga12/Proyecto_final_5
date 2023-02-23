import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserRoutingModule } from './register-user-routing.module';
import { RegisterUserComponent } from './pages/register-user/register-user.component';


@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    RegisterUserRoutingModule
  ],
  exports:[
    RegisterUserComponent
  ]
})
export class RegisterUserModule { }