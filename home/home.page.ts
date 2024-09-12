import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Atributo


  // Metodos
  
  
  constructor(private router: Router) { }
  goToLogin() {
    this.router.navigate(['/login']);  
  }

  goToRegistrarse() {
    this.router.navigate(['/registrarse']);  
  }
  openLink(url: string) {
    window.open(url, '_blank');
  }
  goToResetpass(){
    this.router.navigate(['/resetpass']);  
  }
}
