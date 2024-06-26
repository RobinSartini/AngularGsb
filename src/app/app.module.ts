import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantRouteurComponent } from './composant-routeur/composant-routeur.component';
import { ComposantSelecteurComponent } from './composant-selecteur/composant-selecteur.component';
import { NavbarHtmlComponent } from './navbar/navbar.html.component';
import { ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import { FichefraisComponent } from './fichefrais/fichefrais.component';
import { AjoutfichefraisComponent } from './ajoutfichefrais/ajoutfichefrais.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {FicheFraisService} from './service/fiche-frais.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ComposantRouteurComponent,
    ComposantSelecteurComponent,
    NavbarHtmlComponent,
    ListefichefraisComponent,
    FichefraisComponent,
    AjoutfichefraisComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    FicheFraisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
