/* eslint-disable @angular-eslint/prefer-inject */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonIcon, IonCardContent, IonButton, IonLabel,
  IonBadge, IonCardTitle, IonFooter, IonSearchbar, IonButtons
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { Service } from '../services/auth';
import {
  pulseOutline,
  starOutline,
  calendarOutline,
  homeSharp,
  calendarNumberOutline,
  gridOutline,
  cartOutline,
  personCircleOutline,
  logOutOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonIcon, IonCardContent,
    IonButton, IonLabel, IonBadge, IonCardTitle,
    IonFooter, IonSearchbar, IonButtons
  ],
})
export class HomePage {
  private router = inject(Router);

  listaEstudios = [
    {
      id: 1,
      titulo: 'Electrocardiograma',
      descripcion: 'Conocido también: electrocardiograma en reposo, ECG, EXG.',
      beneficio: 'Beneficio Corazón Sano',
      precio: 85
    },
    {
      id: 2,
      titulo: 'Electrocardiograma',
      descripcion: 'Incluye varios estudios preventivos.',
      beneficio: 'Beneficio Corazón Sano',
      precio: 520
    },
    {
      id: 3,
      titulo: 'Ultrasonido renal y de vías urinarias para mujeres.',
      descripcion: 'Conocido también: electrocardiograma en reposo, ECG, EXG.',
      beneficio: 'Beneficio Corazón Sano',
      precio: 275
    }
  ];

  constructor(public auth: Service) {
    addIcons({
      pulseOutline,
      starOutline,
      calendarOutline,
      homeSharp,
      calendarNumberOutline,
      gridOutline,
      cartOutline,
      personCircleOutline,
      logOutOutline
    });
  }

  // NAVEGACIÓN A LAS PÁGINAS GENERALES
  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

  // NAVEGACIÓN DINÁMICA A ESPECIALIDAD-DETALLE
  verDetalleEstudio(estudio: any) {
    let clave = 'electrocardiograma';
    if (estudio.id === 2) {
      clave = 'electrocardiograma-paquete';
    } else if (estudio.id === 3) {
      clave = 'ultrasonido-renal';
    }

    this.router.navigate(['/especialidad-detalle'], {
      queryParams: { servicio: clave }
    });
  }
}