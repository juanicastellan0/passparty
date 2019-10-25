import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDetailComponent } from './app-detail/client-detail.component';
import { ClientsComponent } from './clients/clients.component';

import { TokensComponent } from './tokens/tokens.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientSearchComponent } from './client-search/client-search.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    OAuthModule.forRoot(),
    FormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailComponent,
    TokensComponent,
    HomeComponent,
    ClientSearchComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
