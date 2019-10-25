import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Client } from './clients/client';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 11, name: 'Mercadolibre' },
      { id: 12, name: 'Mercadopago' },
      { id: 13, name: 'Amazon' },
      { id: 14, name: 'Tienda Nube' },
      { id: 15, name: 'Magento' },
    ];
    return {clients};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(clients: Client[]): number {
    return clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 11;
  }
}
