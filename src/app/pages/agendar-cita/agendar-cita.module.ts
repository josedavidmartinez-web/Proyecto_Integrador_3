import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { AgendarCitaPageRoutingModule } from './agendar-cita-routing.module';

import { AgendarCitaPage } from './agendar-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarCitaPageRoutingModule
  ],
  declarations: [AgendarCitaPage]
})
export class AgendarCitaPageModule {}
