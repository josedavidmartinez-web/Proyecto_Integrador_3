import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonFooter, IonToolbar, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, calendarOutline, gridOutline, cartOutline, personOutline, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonFooter, IonToolbar, IonButton, IonIcon]
})
export class PerfilPage implements OnInit {
  private router = inject(Router);
  pantallaActual: string = 'perfil';

  usuario = {
    nombre: 'Paciente Auracaria',
    correo: 'paciente@clinica.com',
    telefono: '2710000000'
  };

  constructor() {
    addIcons({ homeOutline, calendarOutline, gridOutline, cartOutline, personOutline, logOutOutline });
  }

  ngOnInit() {}

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}