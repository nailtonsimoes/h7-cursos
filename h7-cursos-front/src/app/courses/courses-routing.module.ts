import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarModuloComponent } from './criar-modulo/criar-modulo.component';

import { ModulosComponent } from './modulos/modulos.component';

const routes: Routes = [
  {path: '', component: ModulosComponent  },
  {path: 'new', component: CriarModuloComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
