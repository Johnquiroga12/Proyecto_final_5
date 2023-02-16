import { WelcolmeAdministradorComponent } from './welcolme-administrador/welcolme-administrador.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
