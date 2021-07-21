import { Component, Input, OnInit} from "@angular/core";


@Component({
    selector:'pokemon-inicio',
    styleUrls:['pokemon-inicio.component.css'],
    templateUrl:'pokemon-inicio.component.html'
})

export class PokemonInicioComponent implements OnInit{

    @Input()
    pokemons : any

    @Input()
    totalPokemons:number = 0;

    @Input()
    page:number = 0;

    @Input()
    tipos:any;



    constructor(){ }

    ngOnInit() {

        console.log(this.tipos);

    }   
    



}