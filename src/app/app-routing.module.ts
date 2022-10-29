import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParametreComponent} from "./parametre/parametre.component";

const routes: Routes = [
  {path:'parametre',component: ParametreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
