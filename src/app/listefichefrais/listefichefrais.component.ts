import { Component, OnInit } from '@angular/core';
import {Frais} from "../metier/Frais";
import {FicheFraisService} from "../service/fiche-frais.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-listefichefrais',
  templateUrl: './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  public mesFrais: Frais[]=[];
  private error:string='';
  private id: number=0;
  public titre: string='';
  private unFrais: Frais= new Frais();

  constructor( private unFS: FicheFraisService , private unRouteur: Router) {
    let httpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  ngOnInit() {
   // let item = localStorage.getItem('id');
    // @ts-ignore
   // this.id = Number.parseInt(item);
    this.id=1;
    this.titre = 'Liste des frais du visiteur'+this.id;
    this.getFicheFraisListe(this.id);
  }
getFicheFraisListe(id: number) : void {
    this.unFS.getFicheFraisListe(id).subscribe(
      (Fichefrais) => {
        this.mesFrais = Fichefrais;

      },
      (error)=>{
        this.error=error.message;
      }
    )
}
  modifier(id_frais: number) {

  }
  supprimer(idFrais: number) {

  }
}
