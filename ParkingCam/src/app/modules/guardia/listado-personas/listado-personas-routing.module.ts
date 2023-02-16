import { ListadoPersonasComponent } from './pages/listado-personas/listado-personas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: ListadoPersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoPersonasRoutingModule { }
