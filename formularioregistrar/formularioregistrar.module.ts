import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioregistrarPageRoutingModule } from './formularioregistrar-routing.module';

import { FormularioregistrarPage } from './formularioregistrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioregistrarPageRoutingModule
  ],
  declarations: [FormularioregistrarPage]
})
export class FormularioregistrarPageModule {}
