import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'pokemon-search',
    styleUrls:['pokemon-search.component.css'],
    templateUrl:'pokemon-search.component.html'
})

export class PokemonSearchComponent{

    name:any;

    reseteo: boolean = false;


    @Output()
    search : EventEmitter<any> = new EventEmitter<any>();

    @Output()
    reset : EventEmitter<any> = new EventEmitter<any>();

    constructor(){

    }

    handleSearch(name : any , isValid : any){
        this.search.emit(name.search.toLowerCase());
        this.reseteo = true;
    }

    resetear(){
        this.reset.emit(null);
        this.reseteo = false;
    }
}