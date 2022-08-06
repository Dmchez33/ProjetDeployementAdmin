import { Component, OnInit } from '@angular/core';
import { AuthenficationService } from '../services/authenfication.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HotToastService } from '@ngneat/hot-toast';
// import { AuthenficationService } from '../services/authenfication.service';

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.scss']
})
export class ConnecterComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   password: new FormControl('',Validators.required)
  // })                                         
  email : string = '';
  password : string = '';
  public isAdmin: boolean = false;
  
  constructor(private auth: AuthenficationService) { }

  ngOnInit(): void {
  }
  login() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    if(this.email == 'iddembele206@gmail.com')
      this.isAdmin = true;
    else
      this.isAdmin = false
    this.auth.login(this.email,this.password, this.isAdmin);
    
    this.email = '';
    this.password = '';

  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
  // submit(){
  //   if(!this.loginForm.valid){
  //     return ;
  //   }

  //   const {email, password} = this.loginForm.value;
  //   this.auth.login( email, password).pipe(
  //     this.toast.observe({
  //       success: 'connexion Validé !',
  //       loading: 'en chargement....',
  //       error: 'Erreur de connexion'
  //     })
  //   ).subscribe( () => {
  //     this.router.navigate(['/Accueil'])

  //   })
  // }
}
