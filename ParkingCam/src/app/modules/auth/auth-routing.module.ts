import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import("./auth-login/auth-login.module").then(m => m.AuthLoginModule)
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
