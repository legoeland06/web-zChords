import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { ErrorComponent } from './composants/error/error.component';
import { GrilleComponent } from './composants/grille/grille.component';
import { NotesComponent } from './composants/notes/notes.component';
import { QualityComponent } from './composants/quality/quality.component';
import { CreateChordComponent } from './composants/create-chord/create-chord.component';
import { MenuComponent } from './composants/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    GrilleComponent,
    NotesComponent,
    QualityComponent,
    CreateChordComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
