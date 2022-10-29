import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParametreComponent} from "./parametre/parametre.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ClientsComponent} from "./clients/clients.component";
import {DevisComponent} from "./devis/devis.component";
import {BibliothequeComponent} from "./bibliotheque/bibliotheque.component";

const routes: Routes = [
  {path:'dashboard',component: DashboardComponent},
  {path:'clients',component: ClientsComponent},
  {path:'devis',component: DevisComponent},
  {path:'bibliotheque',component: BibliothequeComponent},
  {path:'parametre',component: ParametreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
