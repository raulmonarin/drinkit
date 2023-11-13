import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckoutPopUpComponent } from './checkout/checkout-pop-up/checkout-pop-up.component';
import { CheckoutPopUp2Component } from './checkout-pop-up2/checkout-pop-up2.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutPopUp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
