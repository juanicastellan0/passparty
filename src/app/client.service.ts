import { Injectable } from '@angular/core';
import {Client} from './clients/client';
import {CLIENTS} from './clients/mock-clients';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
