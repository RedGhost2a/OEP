import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ParametreComponent } from './parametre/parametre.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { ClientsComponent } from './clients/clients.component';
import { DevisComponent } from './devis/devis.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ParametreComponent,
    DashboardComponent,
    BibliothequeComponent,
    ClientsComponent,
    DevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
