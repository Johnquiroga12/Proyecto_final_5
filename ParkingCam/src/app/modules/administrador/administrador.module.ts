import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { WelcolmeAdministradorComponent } from './welcolme-administrador/welcolme-administrador.component';


@NgModule({
  declarations: [
    WelcolmeAdministradorComponent
    ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule
  ]
})
export class AdministradorModule { }
