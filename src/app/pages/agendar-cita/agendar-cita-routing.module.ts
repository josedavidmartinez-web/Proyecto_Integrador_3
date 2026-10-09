import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarCitaPage } from './agendar-cita.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarCitaPageRoutingModule {}
