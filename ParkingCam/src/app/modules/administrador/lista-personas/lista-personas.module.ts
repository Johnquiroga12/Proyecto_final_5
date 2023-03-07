import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPersonasRoutingModule } from './lista-personas-routing.module';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/services/class/search.pipe';


@NgModule({
  declarations: [
    ListaPersonasComponent,
    SearchPipe,
    ],
  imports: [
    CommonModule,
    ListaPersonasRoutingModule,
    RouterModule,
    FormsModule
    ],

  exports: [
    ListaPersonasComponent
  ]
})
export class ListaPersonasModule { }
