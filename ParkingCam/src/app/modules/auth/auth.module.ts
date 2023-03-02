import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { WelcomeAuthComponent } from './welcome-auth/welcome-auth.component';
// import john

@NgModule({
  declarations: [
    WelcomeAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
      ],

    exports: [

    ],
})
export class AuthModule { }
