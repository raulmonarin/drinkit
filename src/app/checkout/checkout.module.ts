import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutPopUpComponent } from './checkout-pop-up/checkout-pop-up.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckoutPopUp2Component } from './checkout-pop-up2/checkout-pop-up2.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    CheckoutPopUpComponent,
    CheckoutPopUp2Component
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule
  ]
})
export class CheckoutModule { }
