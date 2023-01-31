import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login_pComponent } from './login_p/login_p.component';
import { RegUsuarioComponent } from './regUsuario/regUsuario.component';

const routes: Routes = [
{path: 'login', component:Login_pComponent},
{path: 'regusu', component:RegUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
