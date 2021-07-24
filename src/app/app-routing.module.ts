import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  {path:'inicio' , loadChildren: ()=> import('./pokemon/pokemon.module').then(m=> m.PokemonModule)},

  { path: '**', component: NotFoundComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
