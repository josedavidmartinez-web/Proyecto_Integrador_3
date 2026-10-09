import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PerfilPageRoutingModule,
    PerfilPage // 👈 Mover a imports
  ],
  declarations: [] // 👈 Dejar vacío
})
export class PerfilPageModule {}