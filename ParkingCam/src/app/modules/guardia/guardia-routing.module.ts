import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';

const routes: Routes = [

  {
    path:'registro-vehiculo', canActivate: [AuthguardGuard], data: {expectedRoles: 'Guardia'},
    loadChildren: () => import("./registra-vehiculo/registra-vehiculo.module").then(m => m.RegistraVehiculoModule)
  },

  {
    path:'registro-persona', canActivate: [AuthguardGuard], data: {expectedRoles: 'Guardia'},
    loadChildren: () => import("./registra-personas/registra-personas.module").then(m => m.RegistraPersonasModule)
  },

  {
    path:'asigna-bloque', canActivate: [AuthguardGuard], data: {expectedRoles: 'Guardia'},
    loadChildren: () => import("./asignar-bloque/asignar-bloque.module").then(m => m.AsignarBloqueModule)
  },

  {
    path:'listado-persona', canActivate: [AuthguardGuard], data: {expectedRoles: 'Guardia'},
    loadChildren: () => import("./listado-personas/listado-personas.module").then(m => m.ListadoPersonasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardiaRoutingModule { }
