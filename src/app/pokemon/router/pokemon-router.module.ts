import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonContainer } from '../containers/pokemon-container/pokemon.container';





const routes: Routes = [
  { path: '', component: PokemonContainer }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRouterModule { }
