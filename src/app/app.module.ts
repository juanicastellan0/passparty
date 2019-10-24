import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDetailComponent } from './app-detail/client-detail.component';
import { ClientsComponent } from './clients/clients.component';
import { TokensComponent } from './tokens/tokens.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailComponent,
    TokensComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
