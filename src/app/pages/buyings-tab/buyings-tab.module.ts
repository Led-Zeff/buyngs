import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { BuyingsTabPageRoutingModule } from './buyings-tab-routing.module';

import { BuyingsTabPage } from './buyings-tab.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    BuyingsTabPageRoutingModule
  ],
  declarations: [BuyingsTabPage]
})
export class BuyingsTabPageModule {}
