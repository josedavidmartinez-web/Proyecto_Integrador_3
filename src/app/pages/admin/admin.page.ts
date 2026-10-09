import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
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
import { Service } from '../../services/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
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
export class AdminPage implements OnInit {
  private authService = inject(Service);
  usuarioAdmin: string = 'Administrador';

  // Datos de prueba para mostrar en la lista del panel
  listaCitas = [
    { paciente: 'María López', especialidad: 'Traumatología', hora: '09:00 AM', estado: 'Confirmada' },
    { paciente: 'Juan Pérez', especialidad: 'Ginecología', hora: '10:30 AM', estado: 'Pendiente' },
    { paciente: 'Carlos Ruiz', especialidad: 'Urología', hora: '11:15 AM', estado: 'Confirmada' }
  ];

  constructor() {
    addIcons({ logOutOutline });
  }

  ngOnInit() {
    const usuario = this.authService.getUsuario();
    if (usuario) {
      this.usuarioAdmin = usuario.username;
    }
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
