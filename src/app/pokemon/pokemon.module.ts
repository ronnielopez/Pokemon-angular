import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotFoundComponent } from '../not-found/not-found.component';

//Componentes
import { PokemonInicioComponent } from './components/pokemon-inicio/pokemon-inicio.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component.';
import { PokemonModalViewComponent } from './components/pokemon-view/pokemon-modal.component';
import { PokemonContainer } from './containers/pokemon-container/pokemon.container';

//router
import { PokemonRouterModule } from './router/pokemon-router.module';



@NgModule({
  declarations: [
    PokemonInicioComponent,
    PokemonContainer,
    PokemonModalViewComponent,
    PokemonSearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PokemonRouterModule
  ],
  providers: [],
  bootstrap: [PokemonInicioComponent]
})
export class PokemonModule { }
