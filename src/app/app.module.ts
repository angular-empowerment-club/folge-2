import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecretBoxComponent } from './secret-box/secret-box.component';
import { StockCardComponent } from './stock-card/stock-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SecretBoxComponent,
    StockCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
