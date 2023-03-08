import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import("./auth-login/auth-login.module").then(m => m.AuthLoginModule)
  },

  {
    path:'reset-password',
    loadChildren: () => import("./reset-password/reset-password.module").then(m => m.ResetPasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
