import { RegistraPersonasComponent } from './pages/registra-personas/registra-personas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    component:RegistraPersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistraPersonasRoutingModule { }
