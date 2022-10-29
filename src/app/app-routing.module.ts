import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParametreComponent} from "./parametre/parametre.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ClientsComponent} from "./clients/clients.component";
import {DevisComponent} from "./devis/devis.component";
import {BibliothequeComponent} from "./bibliotheque/bibliotheque.component";
import {Title} from "@angular/platform-browser";

const routes: Routes = [
  {path:'dashboard',component: DashboardComponent,data:{ title: 'Dashboard' }},
  {path:'clients',component: ClientsComponent, data: { title: 'Liste des clients' }},
  {path:'devis',component: DevisComponent, data: { title: 'Devis' }},
  {path:'bibliotheque',component: BibliothequeComponent, data: { title: 'Bibiothèque de prix' }},
  {path:'parametre',component: ParametreComponent, data: { title: 'Paramètres' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
