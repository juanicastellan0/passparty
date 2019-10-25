import { Component, OnInit } from '@angular/core';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  constructor(public tokenService: TokenService) { }

  ngOnInit() {
  }

}
