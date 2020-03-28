import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlineSalesPage } from './online-sales';

@NgModule({
  declarations: [
    OnlineSalesPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlineSalesPage),
  ],
})
export class OnlineSalesPageModule {}
