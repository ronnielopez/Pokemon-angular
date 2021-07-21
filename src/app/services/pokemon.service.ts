import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable()
export class PokemonService {

    private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemones(limite: number, offset: number): Observable<Object> {
    //Return todo los pokomenos
    return this.http.get(`${this.baseUrl}pokemon?limit=${limite}&offset=${offset}`);
  }

  getInfoPokemon(name: string) : Observable<Object>{
    return this.http.get(`${this.baseUrl}pokemon/${name}`);
  }

  getInfoAbility(name: string) : Observable<Object>{
    return this.http.get(`${this.baseUrl}ability/${name}`);
  }

}