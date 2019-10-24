import { Component, OnInit } from '@angular/core';

import { Client } from './client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
    // this.clients = this.clientService.getClients();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.clientService.addClient({ name } as Client)
      .subscribe(hero => {
        this.clients.push(hero);
      });
  }

  delete(client: Client): void {
    this.clients = this.clients.filter(h => h !== client);
    this.clientService.deleteClient(client).subscribe();
  }
}
