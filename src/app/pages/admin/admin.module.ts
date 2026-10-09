import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminPageRoutingModule } from './admin-routing.module';
import { AdminPage } from './admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminPageRoutingModule,
    AdminPage // 👈 Va en imports
  ],
  declarations: [] // 👈 Dejar vacío
})
export class AdminPageModule {}