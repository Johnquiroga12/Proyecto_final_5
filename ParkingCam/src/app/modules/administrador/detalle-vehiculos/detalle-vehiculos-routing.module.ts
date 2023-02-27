import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleVehiculosComponent } from './pages/detalle-vehiculos/detalle-vehiculos.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleVehiculosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleVehiculosRoutingModule {}
