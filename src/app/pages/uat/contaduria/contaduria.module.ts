import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaduriaPageRoutingModule } from './contaduria-routing.module';

import { ContaduriaPage } from './contaduria.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaduriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContaduriaPage]
})
export class ContaduriaPageModule {}
