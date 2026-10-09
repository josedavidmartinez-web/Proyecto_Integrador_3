import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonList,
    IonItem,
    IonLabel,
    IonBadge
  ]
})
export class AdminPage {
  private router = inject(Router);

  usuarioAdmin = 'Administrador';

  listaCitas = [
    { paciente: 'Juan Pérez', especialidad: 'Cardiología', hora: '09:00 AM', estado: 'Confirmada' },
    { paciente: 'María López', especialidad: 'Urología', hora: '10:30 AM', estado: 'Pendiente' },
    { paciente: 'Carlos Gómez', especialidad: 'Medicina General', hora: '11:15 AM', estado: 'Confirmada' }
  ];

  constructor() {
    addIcons({
      logOutOutline
    });
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}