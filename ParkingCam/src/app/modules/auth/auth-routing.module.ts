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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
