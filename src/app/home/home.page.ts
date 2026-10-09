import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 

// Importa el servicio real (desde src/app/home/ el servicio está en ../services/auth)

import {  
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonIcon, IonCardContent, IonButton, IonLabel,  
  IonBadge, IonCardTitle, IonFooter, IonSearchbar, IonButtons  
} from '@ionic/angular'; 

import { addIcons } from 'ionicons'; 

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
    // ... tu lista de estudios
  ]; 

  constructor() { 
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

  irA(ruta: string) { 
    this.router.navigate([ruta]); 
  } 

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

  cerrarSesion() { 
    this.router.navigate(['/login']);
  } 
}