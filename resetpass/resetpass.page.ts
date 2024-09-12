import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage {
  formData = {
    username: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async onSubmit() {
    const { username, oldPassword, newPassword, confirmNewPassword } = this.formData;

    // Validaciones
    if (!username || !oldPassword || !newPassword || !confirmNewPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    if (newPassword !== confirmNewPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas nuevas no coinciden.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Aquí puedes agregar más lógica para verificar la contraseña anterior, etc.

    // Mostrar una alerta de éxito
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Contraseña restablecida exitosamente.',
      buttons: ['OK']
    });

    await alert.present();

    // Redirigir a la página principal después de 3 segundos
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
  openLink(url: string) {
    window.open(url, '_blank');
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
