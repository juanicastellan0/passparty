import { Component } from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Passparty';

  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.requireHttps = false;
    this.oauthService.setStorage(localStorage)
    this.oauthService.tokenEndpoint = environment.AUTHURL + 'token';
    this.oauthService.clientId = 'multinexo';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.dummyClientSecret = `1rZKa2N3r5HrwQfZEMHB4IUkXMS4G5tln1kWwz9s2l`;
    console.log('oauthService: ' + this.oauthService);
  }
}
