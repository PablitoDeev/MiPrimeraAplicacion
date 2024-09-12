import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data = {
    user: "",
    pw: ""
  };

  constructor(private router: Router, private nCrtl: NavController, private alertController: AlertController) { }

  ngOnInit() { }

  // Método para redirigir a la página de index si los campos están completos
  async goToIndex() {
    if (this.data.user === '' || this.data.pw === '') {
      // Mostrar alerta si los campos están vacíos
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Por favor, ingresa tu usuario y contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      // Redirigir si los campos están completos
      let nExtras: NavigationExtras = {
        queryParams: {
          data1: this.data.user,
          data2: this.data.pw
        }
      };
      this.nCrtl.navigateForward(['/index'], nExtras);
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
