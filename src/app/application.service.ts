import { Injectable } from '@angular/core';
import {Application} from './applications/application';
import {APPLICATIONS} from './applications/mock-applications';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getApplications(): Observable<Application[]> {
    return of(APPLICATIONS);
  }
}
