import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterVehiculoComponent } from './pages/register-vehiculo/register-vehiculo.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterVehiculoRoutingModule { }
