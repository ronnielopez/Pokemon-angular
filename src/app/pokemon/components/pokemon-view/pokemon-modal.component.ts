import { Component, Input, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
    selector: 'modal-view',
    styleUrls: ['pokemon-modal.component.css'],
    templateUrl: 'pokemon-modal.component.html',
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModalConfig, NgbModal]
})

export class PokemonModalViewComponent implements OnInit{

    @Input()
    pokemon: any;

    abilitiesPokemon:any = [];

    descripcionAbilities: any = [];
    

    constructor(config: NgbModalConfig, private modalService: NgbModal, private pokeService: PokemonService) {
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
      }
    
      open(content : any) {
        this.modalService.open(content, { size: 'lg' });
        
      }

      ngOnInit(){
        this.getFilterAbility();
      }

      getFilterAbility(){
        for(let element of this.pokemon.abilities){
          
          this.pokeService.getInfoAbility(element.ability.name)
          .subscribe((data:any)=>{

            this.abilitiesPokemon.push(data);
            
            let descripcion = data.effect_entries;

            descripcion.map((datas:any)=>{
              if(datas.language.name == 'en'){
                this.descripcionAbilities.push(datas.effect);
              }
            })

          }) 
        }
      }


      getDescripcion(){
        for(let ele of this.descripcionAbilities){
          return ele;
        }
      }


}