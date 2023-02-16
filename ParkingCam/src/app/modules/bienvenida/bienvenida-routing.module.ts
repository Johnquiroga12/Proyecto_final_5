import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'home-bienvenida',
    loadChildren: () => import("./home-bienvenida/home-bienvenida.module").then(m => m.HomeBienvenidaModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienvenidaRoutingModule { }
