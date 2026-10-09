import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { EspecialidadDetallePageRoutingModule } from './especialidad-detalle-routing.module';

import { EspecialidadDetallePage } from './especialidad-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialidadDetallePageRoutingModule
  ],
  declarations: [EspecialidadDetallePage]
})
export class EspecialidadDetallePageModule {}
