import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AjouterInfoComponent } from './ajouter-info/ajouter-info.component';
import { AjouterEtudComponent } from './ajouter-etud/ajouter-etud.component';
import { AjouterCoursComponent } from './ajouter-cours/ajouter-cours.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';

import { AddreuinionComponent } from './addreuinion/addreuinion.component';

import { RegistreComponent } from './registre/registre.component';
import { ForgotPasseWordComponent } from './forgot-passe-word/forgot-passe-word.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NoterEtudiantComponent } from './noter-etudiant/noter-etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { ShowMessageComponent } from './show-message/show-message.component';

@NgModule({
  declarations: [
    AppComponent,


    AjouterInfoComponent,
    AjouterEtudComponent,
    AjouterCoursComponent,
    ConnecterComponent,
    AccueilComponent,

    AddreuinionComponent,

    RegistreComponent,
    ForgotPasseWordComponent,
    VerifyEmailComponent,
    NoterEtudiantComponent,
    EnseignantComponent,
    ShowMessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
