import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLoginRoutingModule } from './auth-login-routing.module';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';


@NgModule({
  declarations: [
    AuthLoginComponent,

  ],
  imports: [
    CommonModule,
    AuthLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  exports: [
    AuthLoginComponent
  ]
})
export class AuthLoginModule { }
