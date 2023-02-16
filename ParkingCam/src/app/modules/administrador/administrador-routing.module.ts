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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
