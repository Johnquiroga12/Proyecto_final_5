import { WelcomeGuardiaComponent } from './modules/guardia/welcome-guardia/welcome-guardia.component';
import { WelcolmeAdministradorComponent } from './modules/administrador/welcolme-administrador/welcolme-administrador.component';
import { WelcomeHomeComponent } from './modules/home/welcome-home/welcome-home.component';
import { WelcomeBienvenidaComponent } from './modules/bienvenida/welcome-bienvenida/welcome-bienvenida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  {
    path: '',
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
    component: WelcolmeAdministradorComponent, canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./modules/administrador/administrador.module").then(m => m.AdministradorModule)
  },

  {
    path: 'guardia',
    component: WelcomeGuardiaComponent, canActivate: [AuthguardGuard], data: {expectedRoles: 'Guardia'},
    loadChildren: () => import("./modules/guardia/guardia.module").then(m => m.GuardiaModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
