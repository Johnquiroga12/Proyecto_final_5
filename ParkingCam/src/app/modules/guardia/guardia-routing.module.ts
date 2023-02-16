import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'registro-vehiculo',
    loadChildren: () => import("./registra-vehiculo/registra-vehiculo.module").then(m => m.RegistraVehiculoModule)
  },

  {
    path:'registro-persona',
    loadChildren: () => import("./registra-personas/registra-personas.module").then(m => m.RegistraPersonasModule)
  },

  {
    path:'asigna-bloque',
    loadChildren: () => import("./asignar-bloque/asignar-bloque.module").then(m => m.AsignarBloqueModule)
  },

  {
    path:'listado-persona',
    loadChildren: () => import("./listado-personas/listado-personas.module").then(m => m.ListadoPersonasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardiaRoutingModule { }
