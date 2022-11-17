import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import{Visiteur} from "../metier/visiteur";


@Injectable({
  providedIn: 'root'
})
export class VisiteurService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string ="";

  getLogin(unV: Visiteur): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/getConnexion';
    alert(JSON.stringify(unV));
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));

  }

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }
}
