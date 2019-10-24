import { Component, OnInit } from '@angular/core';
import {Application} from './application';
import { APPLICATIONS } from './mock-applications';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applications = APPLICATIONS;
  selectedApp: Application;

  constructor() { }

  ngOnInit() {
  }

  onSelect(app: Application): void {
    this.selectedApp = app;
  }
}
