import { Routes } from '@angular/router';
import { Inscription } from './inscription/inscription';
import { Connexion } from './connexion/connexion';
import { Acceuil } from './acceuil/acceuil';
import { DetailBoxes } from './detail-boxes/detail-boxes';
import { Panier } from './panier/panier';
import { Dashboard } from './dashboard/dashboard';
import { Rgpd } from './rgpd/rgpd';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'connexion'},
    { path : 'inscription',component: Inscription},
    { path : 'connexion',component:Connexion},
    { path : 'acceuil',component:Acceuil},
    { path : 'detail-boxes',component:DetailBoxes},
    { path : 'panier',component:Panier},
    { path : 'dashboard', component: Dashboard},
    { path : 'rgpd',component:Rgpd},
];