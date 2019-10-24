import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Client } from './clients/client';
import { CLIENTS } from './clients/mock-clients';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private tokenService: TokenService) { }

  getClients(): Observable<Client[]> {
    this.tokenService.add('as90fyu8d9sad9s0auf8d90sahd89js9a80jd8s90jad8u0sa9');
    return of(CLIENTS);
  }

  getClient(id: number): Observable<Client> {
    this.tokenService.add(`asd09s8ja9d0s09dj0sa hero id=${id}`);
    return of(CLIENTS.find(hero => hero.id === id));
  }
}
