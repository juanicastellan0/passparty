import { Component, OnInit } from '@angular/core';
import {Client} from './client';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  selectedClient: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
    // this.clients = this.clientService.getClients();
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
  }
}
