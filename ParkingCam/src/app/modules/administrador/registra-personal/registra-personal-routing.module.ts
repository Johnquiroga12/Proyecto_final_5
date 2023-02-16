import { RegistraPersonalComponent } from './pages/registra-personal/registra-personal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    component: RegistraPersonalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistraPersonalRoutingModule { }
