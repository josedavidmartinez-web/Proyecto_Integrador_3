/* eslint-disable @angular-eslint/prefer-inject */
import { Component, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
import {  
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonIcon, IonCardContent, IonButton, IonLabel,  
  IonCardTitle, IonFooter, IonButtons, IonItem, IonInput, IonSelect, IonSelectOption, IonTextarea 
} from '@ionic/angular'; 
import { addIcons } from 'ionicons'; 
interface AuthServiceLike {
  logout: () => void;
}
import {  
  homeSharp, 
  gridOutline, 
  cartOutline, 
  personCircleOutline, 
  logOutOutline,
  medkitOutline,
  createOutline,
  trashOutline,
  addCircleOutline
} from 'ionicons/icons'; 

@Component({ 
  selector: 'app-admin', 
  templateUrl: 'admin.page.html', 
  styleUrls: ['admin.page.scss'], 
  standalone: true, 
  imports: [ 
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCard, IonCardHeader, IonIcon, IonCardContent,  
    IonButton, IonLabel, IonCardTitle,  
    IonFooter, IonButtons, IonItem, IonInput, IonSelect, IonSelectOption, IonTextarea 
  ], 
}) 
export class AdminPage { 
  private router = inject(Router); 

  listaEstudiosAdmin = [ 
    { 
      id: 1, 
      titulo: 'Electrocardiograma', 
      precio: 85,
      categoria: 'Cardiología' 
    }, 
    { 
      id: 2, 
      titulo: 'Paquete Corazón Sano', 
      precio: 520,
      categoria: 'Paquetes' 
    }, 
    { 
      id: 3, 
      titulo: 'Ultrasonido renal y de vías urinarias', 
      precio: 275,
      categoria: 'Ultrasonido' 
    } 
  ]; 

  constructor(public authService: AuthServiceLike) { 
    addIcons({  
      homeSharp, 
      gridOutline, 
      cartOutline, 
      personCircleOutline, 
      logOutOutline,
      medkitOutline,
      createOutline,
      trashOutline,
      addCircleOutline
    }); 
  } 

  irA(ruta: string) { 
    this.router.navigate([ruta]); 
  } 

  guardarEstudio() {
    console.log('Guardando nuevo estudio o cambios...');
  }

  cancelarEdicion() {
    console.log('Operación cancelada.');
  }

  editarEstudio(estudio: any) {
    console.log('Editando estudio:', estudio);
  }

  eliminarEstudio(id: number) {
    console.log('Eliminando estudio con ID:', id);
  }

  cerrarSesion() { 
    this.authService.logout(); 
  } 
}