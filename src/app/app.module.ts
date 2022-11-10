import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantRouteurComponent } from './composant-routeur/composant-routeur.component';
import { ComposantSelecteurComponent } from './composant-selecteur/composant-selecteur.component';
import { NavbarHtmlComponent } from './navbar/navbar.html.component';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { FichefraisComponentComponent } from './fichefrais-component/fichefrais-component.component';
import { FichefraisComponent } from './fichefrais/fichefrais.component';
import { AjoutfichefraisComponent } from './ajoutfichefrais/ajoutfichefrais.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposantRouteurComponent,
    ComposantSelecteurComponent,
    NavbarHtmlComponent,
    ListefichefraisComponent,
    FichefraisComponentComponent,
    FichefraisComponent,
    AjoutfichefraisComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
