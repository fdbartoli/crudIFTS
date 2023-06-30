import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ShowItemComponent } from './components/show-item/show-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    ShowItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
