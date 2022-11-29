import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import {ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import {Frais} from "./metier/Frais";
import {AjoutfichefraisComponent} from "./ajoutfichefrais/ajoutfichefrais.component";
import {NavbarHtmlComponent} from "./navbar/navbar.html.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {FichefraisComponent} from "./fichefrais/fichefrais.component";

const routes: Routes = [
  {path:'',redirectTo:'/connexion', pathMatch: 'full' },
  {path:'connexion',component:ConnexionComponent },
  {path:'listefichefrais',component:ListefichefraisComponent },
  {path: 'modifierFrais/:id', component: FichefraisComponent},
  {path: 'ajouterFrais', component:AjoutfichefraisComponent},
  {path:'accueil', component:NavbarHtmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
