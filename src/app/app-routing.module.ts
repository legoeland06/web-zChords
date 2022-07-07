import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateChordComponent } from './composants/create-chord/create-chord.component';
import { GrilleComponent } from './composants/grille/grille.component';


// XXXXXXXXXXXXxXXXXXXXXXXXXXXXXXX
import { HomeComponent } from './composants/home/home.component';

const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'createChord',component:CreateChordComponent},
  { path: 'grille',component:GrilleComponent},
]
// XXXXXXXXXXXXXXXXXX

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
