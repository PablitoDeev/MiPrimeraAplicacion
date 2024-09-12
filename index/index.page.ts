import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import anime from 'animejs/lib/anime.es.js'; // Importar anime.js

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit, AfterViewInit {
  diccionario = {
    user: '',
    pw: ''
  };

  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    private menuCtrl: MenuController,
    private alertController: AlertController // Añadir AlertController
  ) {}

  ngOnInit() {
    // Suscribirse a los parámetros de consulta
    this.aRoute.queryParams.subscribe(params => {
      this.diccionario.user = params['data1'] || '';
      this.diccionario.pw = params['data2'] || '';
    });
  }

  ngAfterViewInit() {
    this.animateBackground(); // Iniciar animación después de la vista cargada
  }

  // Método para abrir el menú
  openMenu() {
    this.menuCtrl.open('start');
  }

  // Método para navegar a la página de perfil
  goToHome() {
    this.router.navigate(['/home']);
  }

  // Método para mostrar una alerta
  async showAlert(option: string) {
    const alert = await this.alertController.create({
      header: 'Aplicación en Proceso',
      message: `La opción ${option} está en proceso de actualización. ¡Pronto estará activa!`,
      buttons: ['OK']
    });

    await alert.present();
  }

  // Método para animar el fondo
  animateBackground() {
    anime({
      targets: '.welcome-container',
      background: [
        { value: 'linear-gradient(135deg, rgb(255, 0, 0), rgb(0, 255, 0))' },
        { value: 'linear-gradient(135deg, rgb(255, 0, 255), rgb(0, 255, 255))' },
        { value: 'linear-gradient(135deg, rgb(0, 255, 0), rgb(255, 255, 0))' },
        { value: 'linear-gradient(135deg, rgb(0, 0, 255), rgb(255, 0, 0))' },
        { value: 'linear-gradient(135deg, rgb(255, 0, 0), rgb(0, 255, 0))' }
      ],
      duration: 15000, // 15 seconds
      easing: 'linear',
      loop: true
    });
  }
}
