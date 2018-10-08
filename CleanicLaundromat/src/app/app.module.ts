import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelfServiceReceiptComponent } from './self-service/self-service-receipt/self-service-receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    SelfServiceReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
