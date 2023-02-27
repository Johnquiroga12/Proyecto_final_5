import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'lista-personas',
    loadChildren: () => import("./lista-personas/lista-personas.module").then(m => m.ListaPersonasModule)
  },

  {
    path: 'lista-vehiculos',
    loadChildren: () => import("./lista-vehiculos/lista-vehiculos.module").then(m => m.ListaVehiculosModule)
  },

  {
    path: 'registro-personal',
    loadChildren: () => import("./registra-personal/registra-personal.module").then(m => m.RegistraPersonalModule)
  },

  {
    path: 'control-bloques',
    loadChildren: () => import("./control-bloques/control-bloques.module").then(m => m.ControlBloquesModule)
  },

  {
    path: 'asignar-credencial',
    loadChildren: () => import("./asignar-credencial/asignar-credencial.module").then(m => m.AsignarCredencialModule)
  },
  {
    path: 'profile',
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path: 'detalle-personas',
    loadChildren: () => import("./detalle-personas/detalle-personas.module").then(m => m.DetallePersonasModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
