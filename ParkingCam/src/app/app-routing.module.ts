import { WelcolmeAdministradorComponent } from './modules/administrador/welcolme-administrador/welcolme-administrador.component';
import { WelcomeHomeComponent } from './modules/home/welcome-home/welcome-home.component';
import { WelcomeBienvenidaComponent } from './modules/bienvenida/welcome-bienvenida/welcome-bienvenida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'bienvenida',
    component: WelcomeBienvenidaComponent,
    loadChildren: () => import("./modules/bienvenida/bienvenida.module").then(m => m.BienvenidaModule)
  },

  {
    path: 'auth',
    component: WelcomeBienvenidaComponent,
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },

  {
  
    path: 'home',
    component: WelcomeHomeComponent,
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
  },

  {
    path: 'administrador',
    component: WelcolmeAdministradorComponent,
    loadChildren: () => import("./modules/administrador/administrador.module").then(m => m.AdministradorModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
