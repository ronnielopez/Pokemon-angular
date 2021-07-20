import { Component, Input, Output } from "@angular/core";

@Component({
    selector:'pokemon-inicio',
    styleUrls:['pokemon-inicio.component.css'],
    templateUrl:'pokemon-inicio.component.html'
})

export class PokemonInicioComponent{

    @Input()
    pokemons : any

    @Input()
    totalPokemons:number = 0;

    @Input()
    page:number = 0;



}