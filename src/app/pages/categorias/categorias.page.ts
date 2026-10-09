/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonFooter, IonToolbar, IonButton, IonIcon, IonTitle, IonButtons, IonHeader } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, calendarOutline, gridOutline, cartOutline, personOutline, medkitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonFooter, IonToolbar, IonButton, IonIcon, IonTitle, IonButtons, IonHeader]
})
export class CategoriasPage implements OnInit {
  private router = inject(Router);
  pantallaActual: string = 'categorias';

  categorias = [
    { nombre: 'Cardiología', clave: 'electrocardiograma' },
    { nombre: 'Imagenología', clave: 'ultrasonido-renal' },
    { nombre: 'Traumatología', clave: 'traumatologia' }
  ];

  constructor() {
    addIcons({ homeOutline, calendarOutline, gridOutline, cartOutline, personOutline, medkitOutline });
  }

  ngOnInit() {}

  verCategoria(clave: string) {
    this.router.navigate(['/especialidad-detalle'], {
      queryParams: { servicio: clave }
    });
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}