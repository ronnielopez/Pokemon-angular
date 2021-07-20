import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { pokemonesL } from '../pokemon/model/pokemon.interface';




@Injectable()
export class PokemonService {

    private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemones(limite: number, offset: number): Observable<Object> {
    //Return todo los pokomenos
    return this.http.get(`${this.baseUrl}?limit=${limite}&offset=${offset}`);
  }

  getInfoPokemon(name: string) : Observable<Object>{
    return this.http.get(`${this.baseUrl}/${name}`);
  }

}