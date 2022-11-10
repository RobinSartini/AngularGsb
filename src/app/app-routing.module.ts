import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import {ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import {Fichefrais} from "./metier/fichefrais";
import {AjoutfichefraisComponent} from "./ajoutfichefrais/ajoutfichefrais.component";
import {NavbarHtmlComponent} from "./navbar/navbar.html.component";
import {ConnexionComponent} from "./connexion/connexion.component";

const routes: Routes = [
  {path:'',redirectTo:'/connexion', pathMatch: 'full' },
  {path:'connexion',component:ConnexionComponent },
  {path:'ListeficheFrais',component:ListefichefraisComponent },
  {path: 'modifierFrais/:id', component: Fichefrais},
  {path: 'ajouterFrais', component:AjoutfichefraisComponent},
  {path:'accueil', component:NavbarHtmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
