import { Component, EventEmitter, Output } from "@angular/core";
import Swal from "sweetalert2";

@Component({
    selector:'pokemon-search',
    styleUrls:['pokemon-search.component.css'],
    templateUrl:'pokemon-search.component.html'
})

export class PokemonSearchComponent{
    //variable que almacena el input
    name:any;
    //Variable bandera para desabilitar el boton de reseteo
    reseteo: boolean = false;

    //evento para mandar a la funcion de getEspecificoPokemon();
    @Output()
    search : EventEmitter<any> = new EventEmitter<any>();
    
    //evento para mandar a la funcion de getPokemones(false);
    @Output()
    reset : EventEmitter<any> = new EventEmitter<any>();

    constructor(){

    }
    //manda el evento con el nombre en minuscula
    handleSearch(name : any , isValid : any){
        if(isValid){
        this.search.emit(name.search.toLowerCase());
        this.reseteo = true;
        }else{
            Swal.fire('Enter something like "Ditto"');
        }
    }
    //solo activa la funcion principal en el container. "getPokemones(true)"
    resetear(){
        this.reset.emit(null);
        this.reseteo = false;
    }
}