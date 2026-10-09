import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialidadDetallePage } from './especialidad-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialidadDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialidadDetallePageRoutingModule {}
