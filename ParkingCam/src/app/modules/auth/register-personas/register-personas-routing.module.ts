import { RegisterPersonasComponent } from './pages/register-personas/register-personas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: RegisterPersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPersonasRoutingModule { }
