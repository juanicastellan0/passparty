import { Component, OnInit, Input } from '@angular/core';
import {Application} from '../applications/application';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {
  @Input() app: Application;

  constructor() { }

  ngOnInit() {
  }

}
