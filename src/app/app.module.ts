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
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ParametreComponent,
    DashboardComponent,
    BibliothequeComponent,
    ClientsComponent,
    DevisComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
