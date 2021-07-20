import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PokemonContainer } from '../containers/pokemon-container/pokemon.container';





const routes: Routes = [
    {path: 'inicio', children: [
        { path: '', component: PokemonContainer}
    ]}
  ]

@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRouterModule { }
