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

    tipos: any[] =[];

    cantidad: number = 3

    constructor(private pokemonService: PokemonService){

    }

    ngOnInit(){
        this.getPokemones(false);
    }


    getPokemones(reset: boolean){
        this.pokemonService
        .getPokemones(this.cantidad , this.page)
        .subscribe((response:any) => {
            //contando los pokemones enviados
            this.totalPokemons = response.count;
            if(reset){
                this.pokemons = [];
                this.tipos = [];
                console.log('entre');
            }
            response.results.forEach((element:any) => {
                
                //return en pokemon los pokemones
                this.getEspecificPokemon(element.name, false);
                
            });
            

        });
    }


    getEspecificPokemon(name: any , search: boolean){
        this.pokemonService.getInfoPokemon(name)
        .subscribe((resp:any)=>{
            if(search){
                this.tipos = [];
                this.pokemons = [];
                this.totalPokemons = 1;
            }
            this.tipos.push(resp.types[0].type.name);
            this.pokemons.push(resp);
        })
    }


    
}