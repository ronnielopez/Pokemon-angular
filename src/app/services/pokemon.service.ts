import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
//import 'rxjs/add/observable/throw';





@Injectable()
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemones(limite: number, offset: number): Observable<Object> {
    //Return todo los pokomenos
    return this.http.get(`${this.baseUrl}pokemon?limit=${limite}&offset=${offset}`)
      .pipe(catchError(this.errorHandler));
  }

  getInfoPokemon(name: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}pokemon/${name}`)
      .pipe(catchError(this.errorHandler));
  }

  getInfoAbility(name: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}ability/${name}`)
      .pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(Swal.fire({
      title: 'Pokemon not found',
      text: 'Try again',
      icon: 'error',
      confirmButtonText: 'Ok'
    }));
  }

}