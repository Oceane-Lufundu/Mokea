import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Navbar } from './navbar/navbar';
import { Connexion } from './connexion/connexion';
import { Inscription } from './inscription/inscription';
import { Acceuil } from './acceuil/acceuil';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [ Inscription ] ,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mokea');
}
