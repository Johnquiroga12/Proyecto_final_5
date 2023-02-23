import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import("./auth-login/auth-login.module").then(m => m.AuthLoginModule)
  },

  {
    path:'register-user',
    loadChildren: () => import("./register-user/register-user.module").then(m => m.RegisterUserModule)
  },

  {
    path:'register-vehiculo',
    loadChildren: () => import("./register-vehiculo/register-vehiculo.module").then(m => m.RegisterVehiculoModule)
  },

  {
    path:'register-end',
    loadChildren: () => import("./register-end/register-end.module").then(m => m.RegisterEndModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
