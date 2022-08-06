import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddreuinionComponent } from './addreuinion/addreuinion.component';

import { AjouterCoursComponent } from './ajouter-cours/ajouter-cours.component';
import { AjouterEtudComponent } from './ajouter-etud/ajouter-etud.component';
import { AjouterInfoComponent } from './ajouter-info/ajouter-info.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { ForgotPasseWordComponent } from './forgot-passe-word/forgot-passe-word.component';
import { AuthGuard } from './guard/auth.guard';


import { NoterEtudiantComponent } from './noter-etudiant/noter-etudiant.component';
import { RegistreComponent } from './registre/registre.component';
import { ShowMessageComponent } from './show-message/show-message.component';

import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  // {path: '', redirectTo: 'connexion', pathMatch:'full'},
  {path:'', component: ConnecterComponent},
  {path:'Accueil', component: AccueilComponent, canActivate: [AuthGuard]},
  {path:'ajouteInfo', component: AjouterInfoComponent, canActivate: [AuthGuard]},
  {path:'ajoutcours', component: AjouterCoursComponent, canActivate: [AuthGuard]},
  {path:'Enseignant', component: EnseignantComponent, canActivate: [AuthGuard]},
  {path: 'NoterEtudiant', component: NoterEtudiantComponent, canActivate: [AuthGuard]},
  {path:'connexion', component: ConnecterComponent, canActivate: [AuthGuard]},
  {path:'Message', component: ShowMessageComponent,canActivate: [AuthGuard] },
  {path: 'ajoutedutiant', component: AjouterEtudComponent, canActivate: [AuthGuard]},
  

  {path: 'reuinion', component: AddreuinionComponent, canActivate: [AuthGuard]},

  {path: 'registre', component: RegistreComponent, canActivate: [AuthGuard]},
  {path: 'mot-passe-oublie', component: ForgotPasseWordComponent},
  {path: 'verify-Email', component: VerifyEmailComponent, canActivate: [AuthGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
