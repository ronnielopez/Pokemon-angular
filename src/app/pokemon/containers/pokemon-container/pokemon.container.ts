import { Component, OnChanges, OnInit } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";



@Component({
    styleUrls: ['pokemon.container.css'],
    templateUrl: 'pokemon.container.html'
})

export class PokemonContainer implements OnInit{
    //los pokemones
    pokemons: any[] = [];
    //current page de la paginacion
    page = 0;
    //numero total de pokemones
    totalPokemons: number = 0;

    //cantidad de pokemon que se muestran
    cantidad: number = 3;





    constructor(private pokemonService: PokemonService){

    }

    ngOnInit(){
        this.getPokemones(false);
    }


    getPokemones(reset: boolean){
        if(reset){
            this.pokemons = [];
            this.page = 0;
            //console.log(this.totalPokemons);
        }
        //obtiene los nombres de los pokemons
        this.pokemonService
        .getPokemones(this.cantidad , this.page)
        .subscribe((response:any) => {
            //contando los pokemones enviado
            this.totalPokemons = response.count;
            
            response.results.forEach((element:any) => {
                
                //return en pokemon los pokemones
                this.getEspecificPokemon(element.name, false);
                
            });
            

        });
    }


    getEspecificPokemon(name: any , search: boolean){
        this.pokemonService.getInfoPokemon(name)
        .subscribe((resp:any)=>{
            //esto reinicia el arreglo cuando se quiera hacer una busqueda
            if(search){

                this.pokemons = [];
            }
            //console.log(this.page);
            this.pokemons.push(resp);
        });
    }

    
}