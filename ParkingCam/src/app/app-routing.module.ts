import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Login_pComponent } from './login_p/login_p.component';
import { Mod_PersonasComponent } from './Mod_Personas/Mod_Personas.component';
import { Pag_prin_bienvenidaComponent } from './pag_prin_bienvenida/pag_prin_bienvenida.component';
import { RegUsuarioComponent } from './regUsuario/regUsuario.component';

const routes: Routes = [
{path: 'login', component:Login_pComponent},
{path: 'regusu', component:RegUsuarioComponent},
{path: 'pag_prin', component:Pag_prin_bienvenidaComponent},
{path: 'personas_reg', component:Mod_PersonasComponent},
{path: 'inicio', component:InicioComponent},
{path : '', redirectTo: 'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
