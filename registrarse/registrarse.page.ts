import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  formData = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: null,
    sede: ''
  };

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() { }

  async onSubmit() {
    if (!this.formData.nombre || !this.formData.apellidoPaterno || !this.formData.apellidoMaterno || !this.formData.edad || !this.formData.sede) {
      const alert = await this.alertController.create({
        header: 'Campos Faltantes',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Su registro se ha completado con éxito.',
      buttons: ['OK']
    });
    await alert.present();

    const loading = await this.loadingController.create({
      message: 'Cargando Registro, Estamos redireccionado a pagina principal!',
      duration: 2000
    });
    await loading.present();

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
