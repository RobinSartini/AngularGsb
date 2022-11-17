import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public titre : string ='Connexion';
  public userLogin!: string;
  public userMdp!: string;
  public lblMdp : string ='Entrez votre mot de passe : ';
  public lblLogin : string = 'logi : ';
  public estCache : boolean = true;
  public unVisiteur! : Visiteur;
  private error : string = '';

  constructor(private unVS: VisiteurService, private router: Router) { }

  ngOnInit(): void {
  }

  valider() : void {
    this.unVisiteur = new Visiteur();
    this.unVisiteur.login_visiteur= this.userLogin;
    this.unVisiteur.pwd_visiteur=this.userMdp;
    this.unVisiteur.id_visiteur=0;

  }
}
