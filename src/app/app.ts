import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Navbar } from './navbar/navbar';
import { Inscription } from './inscription/inscription';
import { Connexion } from './connexion/connexion';
import { Acceuil } from './acceuil/acceuil';
import { DetailBoxes } from './detail-boxes/detail-boxes';
import { Dashboard } from './dashboard/dashboard';
import { Panier } from "./panier/panier";
import { Rgpd } from './rgpd/rgpd';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Inscription, Connexion, Navbar, Acceuil, DetailBoxes, Panier, Rgpd, RouterOutlet] ,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mokea');
}
