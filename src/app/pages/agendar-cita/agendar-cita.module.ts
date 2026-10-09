import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgendarCitaPageRoutingModule } from './agendar-cita-routing.module';
import { AgendarCitaPage } from './agendar-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgendarCitaPageRoutingModule,
    AgendarCitaPage // 👈 Mover aquí a imports
  ],
  declarations: [] // 👈 Dejar vacío
})
export class AgendarCitaPageModule {}