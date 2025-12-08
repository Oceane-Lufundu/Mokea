import { Routes } from '@angular/router';
import { Connexion } from './connexion/connexion';
import { Inscription } from './inscription/inscription';
import { Acceuil } from './acceuil/acceuil';
import { Dashboard } from './dashboard/dashboard';
import { Panier } from './panier/panier';
import { Rgpd } from './rgpd/rgpd';


export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path : 'connexion',component:Connexion},
    { path : 'inscription',component:Inscription},
    { path : 'acceuil',component:Acceuil},
    { path : 'panier',component:Panier},
    { path : 'rgpd',component:Rgpd},
    { path: 'dashboard', component: Dashboard },
];