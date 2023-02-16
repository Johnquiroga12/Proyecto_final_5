import { AsignarBloqueComponent } from './pages/asignar-bloque/asignar-bloque.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: AsignarBloqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignarBloqueRoutingModule { }
