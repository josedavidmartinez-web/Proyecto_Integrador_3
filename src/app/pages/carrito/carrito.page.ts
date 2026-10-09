/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonFooter, IonToolbar, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, calendarOutline, gridOutline, cartOutline, personOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonFooter, IonToolbar, IonButton, IonIcon]
})
export class CarritoPage implements OnInit {
  private router = inject(Router);
  pantallaActual: string = 'carrito';

  itemsCarrito = [
    { id: 1, titulo: 'Electrocardiograma', precio: 85 },
    { id: 2, titulo: 'Ultrasonido renal', precio: 275 }
  ];

  constructor() {
    addIcons({ homeOutline, calendarOutline, gridOutline, cartOutline, personOutline, trashOutline });
  }

  ngOnInit() {}

  obtenerTotal() {
    return this.itemsCarrito.reduce((acc, item) => acc + item.precio, 0);
  }

  eliminarItem(id: number) {
    this.itemsCarrito = this.itemsCarrito.filter(i => i.id !== id);
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}