import { Component, Input, OnChanges, OnInit} from "@angular/core";


@Component({
    selector:'pokemon-inicio',
    styleUrls:['pokemon-inicio.component.css'],
    templateUrl:'pokemon-inicio.component.html'
})

export class PokemonInicioComponent{

    @Input()
    pokemon : any

    @Input()
    totalPokemons:number = 0;

    @Input()
    page:number = 0;

    @Input()
    cantidad:number = 0;
    
    constructor(){

    }

}