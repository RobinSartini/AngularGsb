import { Component, OnInit } from '@angular/core';
import {FicheFraisService} from "../service/fiche-frais.service";
import {ActivatedRoute, Router,ParamMap} from "@angular/router";
import {Frais} from "../metier/Frais";

@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {

  private unFrais : Frais[]=[];
  private fraisid: number=0;
  private titre: string = "Modification d'un frais";
  private paramMap: ParamMap[]=[];
  private error: string = '';


  constructor(private unFS: FicheFraisService,
              private activatedRoute: ActivatedRoute, private unRouteur: Router) { }

  ngOnInit(): void {
  }

}
