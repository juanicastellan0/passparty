import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokens: string[] = [];

  add(token: string) {
    this.tokens.push(token);
  }

  clear() {
    this.tokens = [];
  }
}
