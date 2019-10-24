import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
  constructor(private oauthService: OAuthService) {
  }

  public login() {
    console.log('login');
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    console.log('logoff');
    this.oauthService.logOut();
  }

  public get name(): string|null {
    const claims: any = this.oauthService.getIdentityClaims();
    console.log('claims: ' + claims);
    if (!claims) {
      return null;
    }
    return claims.given_name;
  }
}
