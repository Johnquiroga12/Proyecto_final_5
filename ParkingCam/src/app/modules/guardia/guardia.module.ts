import { WelcomeGuardiaComponent } from './welcome-guardia/welcome-guardia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardiaRoutingModule } from './guardia-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WelcomeGuardiaComponent
  ],
  imports: [
    CommonModule,
    GuardiaRoutingModule,
    SharedModule
    ]
})
export class GuardiaModule { }
