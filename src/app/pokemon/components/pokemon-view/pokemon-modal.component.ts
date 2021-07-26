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
    //variable mandada desde el componente de pokemon-inicio que es el pokemon individual
    @Input()
    pokemon: any;
    //variable mandada desde el componente de pokemon-inicio que es el tipo del pokemon
    @Input()
    tipo: any;

    //variable que va a almacenar las habilidades de un pokemon especifico
    abilitiesPokemon:any = [];
    //variable que va a almacenar la descripcion de las habilidades de un pokemon especifico
    descripcionAbilities: any = [];
    

    constructor(config: NgbModalConfig, private modalService: NgbModal, private pokeService: PokemonService) {
        // customize default values of modals used by this component tree -- modal
        config.backdrop = 'static';
        config.keyboard = false;
      }
      //funcion para abrir el modal
      open(content : any) {
        this.modalService.open(content, { size: 'lg' });
        
      }

      ngOnInit(){
        this.getFilterAbility();
        //console.log(this.tipo);
      }
      //Este filtro seria para obtener la descripcion de las habilidades de un pokemon en especifico
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

      //loop para obtener la descripcion
      getDescripcion(){
        for(let ele of this.descripcionAbilities){
          return ele;
        }
      }

      

}