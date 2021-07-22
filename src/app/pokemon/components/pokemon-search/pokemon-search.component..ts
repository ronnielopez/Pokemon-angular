import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'pokemon-search',
    styleUrls:['pokemon-search.component.css'],
    templateUrl:'pokemon-search.component.html'
})

export class PokemonSearchComponent{

    name:any;


    @Output()
    search : EventEmitter<any> = new EventEmitter<any>();

    @Output()
    reset : EventEmitter<any> = new EventEmitter<any>();

    constructor(){

    }

    handleSearch(name : any , isValid : any){
        this.search.emit(name.search);
    }

    resetear(){
        this.reset.emit(null);
    }
}