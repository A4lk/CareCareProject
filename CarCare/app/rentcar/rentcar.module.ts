import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentcarPageRoutingModule } from './rentcar-routing.module';

import { RentcarPage } from './rentcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentcarPageRoutingModule
  ],
  declarations: [RentcarPage]
})
export class RentcarPageModule {}
