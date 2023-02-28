import { DetallePersonasComponent } from './detalle-personas/pages/detalle-personas/detalle-personas.component';
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
    path: 'lista-registros',
    loadChildren: () => import("./lista-registros/lista-registros.module").then(m => m.ListaRegistrosModule)
  },

  {
    path: 'lista-bloques',
    loadChildren: () => import("./lista-bloques/lista-bloques.module").then(m => m.ListaBloquesModule)
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
    path: 'detalle-personas/:id',
    loadChildren: () => import("./detalle-personas/detalle-personas.module").then(m => m.DetallePersonasModule)
  },
  {
    path: 'detalle-vehiculos/:id',
    loadChildren: () => import("./detalle-vehiculos/detalle-vehiculos.module").then(m => m.DetalleVehiculosModule)
  },

  {
    path: 'detalle-registros/:id',
    loadChildren: () => import("./detalle-registros/detalle-registros.module").then(m => m.DetalleRegistrosModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
