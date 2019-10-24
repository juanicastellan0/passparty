import { Component, OnInit } from '@angular/core';
import {Application} from './application';
import {ApplicationService} from '../application.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applications: Application[];
  selectedApp: Application;

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.getApplications();
  }

  getApplications(): void {
    this.applicationService.getApplications()
      .subscribe(applications => this.applications = applications);
    // this.applications = this.applicationService.getApplications();
  }

  onSelect(app: Application): void {
    this.selectedApp = app;
  }
}
