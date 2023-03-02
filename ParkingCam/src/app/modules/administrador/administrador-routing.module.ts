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
  },

  {
    path: 'editar-persona/:id',
    loadChildren: () => import("./editar-persona/editar-persona.module").then(m => m.EditarPersonaModule)
  },

  {
    path: 'editar-vehiculo/:id',
    loadChildren: () => import("./editar-vehiculo/editar-vehiculo.module").then(m => m.EditarVehiculoModule)
  },
  {
    path: 'editar-bloque/:id',
    loadChildren: () => import("./editar-bloque/editar-bloque.module").then(m => m.EditarBloqueModule)
  },
  {
    path: 'registro-personas',
    loadChildren: () => import("./register-personas/register-personas.module").then(m => m.RegisterPersonasModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
