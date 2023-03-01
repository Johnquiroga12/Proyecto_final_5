import { EditarBloqueComponent } from './pages/editar-bloque/editar-bloque.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: EditarBloqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarBloqueRoutingModule { }
