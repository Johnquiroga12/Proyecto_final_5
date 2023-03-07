import { DetallePersonasComponent } from './detalle-personas/pages/detalle-personas/detalle-personas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';

const routes: Routes = [
  
  {
    path: 'lista-personas', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./lista-personas/lista-personas.module").then(m => m.ListaPersonasModule)
  },

  {
    path: 'lista-vehiculos', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./lista-vehiculos/lista-vehiculos.module").then(m => m.ListaVehiculosModule)
  },

  {
    path: 'lista-registros', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./lista-registros/lista-registros.module").then(m => m.ListaRegistrosModule)
  },

  {
    path: 'lista-bloques', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./lista-bloques/lista-bloques.module").then(m => m.ListaBloquesModule)
  },

  {
    path: 'lista-usuarios', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./lista-usuarios/lista-usuarios.module").then(m => m.ListaUsuariosModule)
  },

  {
    path: 'registro-personal', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./registra-personal/registra-personal.module").then(m => m.RegistraPersonalModule)
  },

  {
    path: 'control-bloques', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./control-bloques/control-bloques.module").then(m => m.ControlBloquesModule)
  },

  {
    path: 'profile', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path: 'detalle-personas/:id', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./detalle-personas/detalle-personas.module").then(m => m.DetallePersonasModule)
  },
  {
    path: 'detalle-vehiculos/:id', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./detalle-vehiculos/detalle-vehiculos.module").then(m => m.DetalleVehiculosModule)
  },

  {
    path: 'detalle-registros/:id', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./detalle-registros/detalle-registros.module").then(m => m.DetalleRegistrosModule)
  },

  {
    path: 'editar-persona/:id', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./editar-persona/editar-persona.module").then(m => m.EditarPersonaModule)
  },

  {
    path: 'editar-vehiculo/:id', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./editar-vehiculo/editar-vehiculo.module").then(m => m.EditarVehiculoModule)
  },
  {
    path: 'editar-bloque/:id', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./editar-bloque/editar-bloque.module").then(m => m.EditarBloqueModule)
  },
  {
    path: 'registro-personas', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./register-personas/register-personas.module").then(m => m.RegisterPersonasModule)
  },
  {
    path: 'registro-vehiculo', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./register-vehiculo/register-vehiculo.module").then(m => m.RegisterVehiculoModule)
  },
  {
    path: 'registro-usuario', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./register-user/register-user.module").then(m => m.RegisterUserModule)
  },
  {
    path: 'registro-bloque', canActivate: [AuthguardGuard], data: {expectedRoles: 'Administrador'},
    loadChildren: () => import("./register-bloque/register-bloque.module").then(m => m.RegisterBloqueModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
