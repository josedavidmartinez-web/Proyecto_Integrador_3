import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonFooter, IonIcon, ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, calendarOutline, gridOutline, cartOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.page.html',
  styleUrls: ['./agendar-cita.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonFooter, 
    IonIcon
  ]
})
export class AgendarCitaPage {
  private router = inject(Router);
  private toastController = inject(ToastController);

  pantallaActual: string = 'agendar';

  nombreCompleto: string = '';
  edad: number | null = null;
  telefono: string = '';
  correo: string = '';
  curp: string = '';
  motivoConsulta: string = '';

  constructor() {
    addIcons({ homeOutline, calendarOutline, gridOutline, cartOutline, personOutline });
  }

  async confirmarCita() {
    const toast = await this.toastController.create({
      message: '¡CITA GENERADA CON ÉXITO!',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
    this.router.navigate(['/home']);
  }

  regresar() {
    this.router.navigate(['/home']);
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}