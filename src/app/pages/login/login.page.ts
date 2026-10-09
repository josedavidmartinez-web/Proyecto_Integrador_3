/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonSegmentButton, IonLabel, IonItem, IonInput, IonSegment, IonToast } from '@ionic/angular';
import { Service } from '../../services/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonButton,
    IonBackButton,
    IonButtons,
    IonSegmentButton,
    CommonModule,
    FormsModule,
    IonItem,
    IonInput,
    IonSegment,
    IonToast
  ]
})
export class LoginPage implements OnInit {

  private authService = inject(Service);
  private toastCtrl = inject(ToastController);

  modo: 'login' | 'registro' = 'login';

  // Campos Login
  loginUser: string = '';
  loginPass: string = '';
  loginPassVisible: boolean = false;
  Service: any;

  TogglePassword() {
    this.loginPassVisible = !this.loginPassVisible;
  }

  // Campos Registro
  regNombre: string = '';
  regCorreo: string = '';
  regPass: string = '';

  constructor() {}

  async ingresar() {
    const exito = this.Service.login(this.loginUser, this.loginPass);
    if (!exito) {
      this.mostrarMensaje('Usuario o contraseña incorrectos');
    }
    this.loginUser = '';
    this.loginPass = '';
  }

  async registrar() {
    const exito = this.Service.registro(this.regNombre, this.regCorreo, this.regPass);
    if (exito) {
      this.mostrarMensaje('¡REGISTRO EXITOSO!');
    } else {
      this.mostrarMensaje('Por favor completa todos los campos');
    }
    this.regNombre = '';
    this.regCorreo = '';
    this.regPass = '';
  }

  async mostrarMensaje(msj: string) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  ngOnInit() {}
}