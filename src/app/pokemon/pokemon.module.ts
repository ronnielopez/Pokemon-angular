import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonInicioComponent } from './components/pokemon-inicio/pokemon-inicio.component';
import { PokemonModalViewComponent } from './components/pokemon-view/pokemon-modal.component';
import { PokemonContainer } from './containers/pokemon-container/pokemon.container';
import { PokemonRouterModule } from './router/pokemon-router.module';



@NgModule({
  declarations: [
    PokemonInicioComponent,
    PokemonContainer,
    PokemonModalViewComponent
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
