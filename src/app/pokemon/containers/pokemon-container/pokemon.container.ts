import { Component, OnInit } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";



@Component({
    styleUrls: ['pokemon.container.css'],
    templateUrl: 'pokemon.container.html'
})

export class PokemonContainer implements OnInit{
    
    pokemons: any[] = [];
    
    page = 1;

    totalPokemons: number = 0;

    constructor(private pokemonService: PokemonService){

    }

    ngOnInit(){
        this.getPokemones();
    }


    getPokemones(){
        this.pokemonService
        .getPokemones(3 , this.page + 0)
        .subscribe((response:any) => {
            //contando los pokemones enviados
            this.totalPokemons = response.count;

            response.results.forEach((element:any) => {

                //return en pokemon los pokemones
                this.pokemonService.getInfoPokemon(element.name)
                .subscribe((resp : any) => {
                    this.pokemons.push(resp);
                    
                });
                

            });
            

        });
    }
}