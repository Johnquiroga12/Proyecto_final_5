import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';


@NgModule({
  declarations: [
    AuthLoginComponent
  ],
  imports: [
    CommonModule,
    AuthLoginRoutingModule
  ],
  
  exports: [
    AuthLoginComponent
  ]
})
export class AuthLoginModule { }
