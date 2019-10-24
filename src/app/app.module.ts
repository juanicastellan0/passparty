import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './app-detail/client-detail.component';
import { TokensComponent } from './tokens/tokens.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientDetailComponent,
    TokensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
