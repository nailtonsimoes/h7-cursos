import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ModulosComponent } from './modulos/modulos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CriarModuloComponent } from './criar-modulo/criar-modulo.component';
import { LoginComponent } from './login/login.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModulosComponent,
    CriarModuloComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
