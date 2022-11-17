import { Injectable } from '@angular/core';
import {Frais} from "../metier/Frais";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class FicheFraisService {


  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string ="";

  private unFrais: Frais =new Frais();

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getFicheFraisListe(id: number): Observable<any> {
    this.ClientUrl= environment.ENDPOINT + 'api/frais/listeFrais/' + id;
    alert(this.ClientUrl);
    return this.httpClient.get(this.ClientUrl);
  }
}




