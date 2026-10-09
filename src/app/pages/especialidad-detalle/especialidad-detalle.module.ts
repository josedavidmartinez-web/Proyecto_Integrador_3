import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EspecialidadDetallePageRoutingModule } from './especialidad-detalle-routing.module';
import { EspecialidadDetallePage } from './especialidad-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EspecialidadDetallePageRoutingModule,
    EspecialidadDetallePage 
  ],
  declarations: [] // 
})
export class EspecialidadDetallePageModule {}