import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Client } from './clients/client';
import { CLIENTS } from './clients/mock-clients';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsUrl = 'api/clients';  // URL to web api

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  getClients(): Observable<Client[]> {
    this.tokenService.add('clients fetch');
    return this.http.get<Client[]>(this.clientsUrl)
      .pipe(
        tap(_ => this.log('fetched clients')),
        catchError(this.handleError<Client[]>('getClients', []))
      );
    // return of(CLIENTS);
  }

  getClient(id: number): Observable<Client> {
    this.tokenService.add(`client id=${id}`);
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url).pipe(
      tap(_ => this.log(`fetched client id=${id}`)),
      catchError(this.handleError<Client>(`getHero id=${id}`))
    );
    // return of(CLIENTS.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.tokenService.add(`tokenService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
