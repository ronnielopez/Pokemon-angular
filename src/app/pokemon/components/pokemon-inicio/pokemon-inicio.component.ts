import { Component, Input, OnChanges, OnInit} from "@angular/core";


@Component({
    selector:'pokemon-inicio',
    styleUrls:['pokemon-inicio.component.css'],
    templateUrl:'pokemon-inicio.component.html'
})

export class PokemonInicioComponent{
    //variable mandada por el container que solo es un pokemon
    @Input()
    pokemon : any
    
    constructor(){

    }

}