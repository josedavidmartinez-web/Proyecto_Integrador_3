import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonFooter, IonToolbar, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline, homeOutline, calendarOutline, gridSharp, cartOutline, personOutline } from 'ionicons/icons';

interface DetalleServicio {
  titulo: string;
  descripcion: string;
  puntosClave: string[];
  precio?: string;
}

@Component({
  selector: 'app-especialidad-detalle',
  templateUrl: './especialidad-detalle.page.html',
  styleUrls: ['./especialidad-detalle.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonFooter, IonToolbar, IonButton, IonIcon]
})
export class EspecialidadDetallePage implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  pantallaActual: string = 'home';

  baseDeDatosDetalles: { [key: string]: DetalleServicio } = {
    'electrocardiograma': {
      titulo: 'Electrocardiograma',
      descripcion: 'Estudio de diagnóstico no invasivo que registra la actividad eléctrica del corazón en reposo.',
      puntosClave: [
        'Conocido también como: ECG, EXG en reposo.',
        'Evalúa el ritmo cardíaco y detecta posibles arritmias.',
        'Resultado inmediato al terminar el estudio.'
      ],
      precio: '$85.00'
    },
    'electrocardiograma-paquete': {
      titulo: 'Electrocardiograma - Paquete Preventivo',
      descripcion: 'Estudio integral enfocado en la salud cardiovascular completa.',
      puntosClave: [
        'Incluye varios estudios preventivos complementarios.',
        'Beneficio Corazón Sano incluido.',
        'Requiere agendar cita previa.'
      ],
      precio: '$520.00'
    },
    'ultrasonido-renal': {
      titulo: 'Ultrasonido renal y de vías urinarias',
      descripcion: 'Estudio de imagen que utiliza ondas sonoras para examinar la estructura de los riñones y vejiga.',
      puntosClave: [
        'Detecta cálculos renales, quistes e inflamación.',
        'Requiere indicación de vejiga llena previa al estudio.'
      ],
      precio: '$275.00'
    }
  };

  detalleActual: DetalleServicio = {
    titulo: 'Cargando...',
    descripcion: '',
    puntosClave: []
  };

  constructor() {
    addIcons({ arrowBackOutline, homeOutline, calendarOutline, gridSharp, cartOutline, personOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const clave = params['servicio'] || 'electrocardiograma';
      const claveNormalizada = clave.toLowerCase();

      if (this.baseDeDatosDetalles[claveNormalizada]) {
        this.detalleActual = this.baseDeDatosDetalles[claveNormalizada];
      } else {
        this.detalleActual = {
          titulo: clave,
          descripcion: 'Información detallada sobre la consulta médica o servicio seleccionado.',
          puntosClave: [
            'Atención personalizada por médicos especialistas.',
            'Requiere agendar cita previa.'
          ]
        };
      }
    });
  }

  agendarCita() {
    this.router.navigate(['/agendar']);
  }

  regresar() {
    this.router.navigate(['/home']);
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}