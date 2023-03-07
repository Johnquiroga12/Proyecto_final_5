import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuscarPipe } from './buscar.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomePageModule { }
