import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Acceuil } from './acceuil/acceuil';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [Navbar,Acceuil,Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mokea');
}
