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
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  /** POST: add a new hero to the server */
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, client, this.httpOptions).pipe(
      tap((newHero: Client) => this.log(`added client w/ id=${newHero.id}`)),
      catchError(this.handleError<Client>('addClient'))
    );
  }

  /** PUT: update the client on the server */
  updateClient(client: Client): Observable<any> {
    return this.http.put(this.clientsUrl, client, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${client.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** Log a ClientService token with the TokenService */
  private log(token: string) {
    this.tokenService.add(`tokenService: ${token}`);
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
