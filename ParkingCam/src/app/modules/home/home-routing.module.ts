import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';

const routes: Routes = [

  {
    path:'dashboard', canActivate: [AuthguardGuard], data: {expectedRoles: ['Administrador', 'Secretaria'] },
    loadChildren: () => import("./home-page/home-page.module").then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

