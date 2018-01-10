import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecretBoxComponent } from './secret-box/secret-box.component';


@NgModule({
  declarations: [
    AppComponent,
    SecretBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
