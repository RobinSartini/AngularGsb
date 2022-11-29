import { Component, OnInit } from '@angular/core';
import {Frais} from "../metier/Frais";
import {Router,  ActivatedRoute, ParamMap} from "@angular/router";

import {FicheFraisService} from "../service/fiche-frais.service";

import {Etat} from "../metier/Etat";
import {EtatServiceService} from "../service/etat.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";



@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {
  public  mesFrais:Frais[]=[];
  public unFrais!  : Frais ;
  private fraisid!:number;
  public titre:string="Modification d'un frais";
  private paramMap: ParamMap[]=[];
  private error: string='';
  public mesEtats: Etat[]=[];

  constructor(private unES: EtatServiceService, private unFS: FicheFraisService,
              private ActivatedRoute: ActivatedRoute, private unRouteur: Router){

  }

  ngOnInit() {
    // @ts-ignore
    this.fraisid= +this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getFicheFrais(this.fraisid);
    this.getEtat();
  }

  /*getFicheFrais(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/getUnFrais/' + id;
    return this.httpClient.get(this.ClientUrl);
  }*/


  getFicheFrais(id:number): void  {
    this.unFS.getFicheFrais(id).subscribe(
      (Fichefrais)=>{
        this.unFrais = Fichefrais;
      },
      (error)=>{
        this.error=error.messages;
      }
    )

  }

  getEtat(): void  {
    this.unES.getListeEtat().subscribe(
      (mesEtats)=>{
        this.mesEtats = mesEtats;
      },
      (error)=>{
        this.error=error.messages;
      }
    )

  }
}
