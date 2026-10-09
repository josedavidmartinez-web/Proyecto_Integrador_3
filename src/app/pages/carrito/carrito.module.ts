import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarritoPageRoutingModule } from './carrito-routing.module';
import { CarritoPage } from './carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarritoPageRoutingModule,
    CarritoPage // 👈 Se mueve a 'imports' porque CarritoPage es Standalone
  ],
  declarations: [] // 👈 Se deja vacío
})
export class CarritoPageModule {}