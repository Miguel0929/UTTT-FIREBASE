import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuIngNanotecnologiaPageRoutingModule } from './tsu-ing-nanotecnologia-routing.module';

import { TsuIngNanotecnologiaPage } from './tsu-ing-nanotecnologia.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuIngNanotecnologiaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TsuIngNanotecnologiaPage]
})
export class TsuIngNanotecnologiaPageModule {}
