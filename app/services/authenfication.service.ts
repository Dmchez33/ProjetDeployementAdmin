import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenficationService {
  public isAdmin: boolean = false
  public isAuth: boolean = false;
  public controlEmail: string = '';
  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // login method
  login(email: string, password: string, Role: boolean) {

    this.isAdmin = Role;
    this.controlEmail = email;
    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {

      localStorage.setItem('token', 'true');
      this.isAuth = true;
      this.router.navigate(['/Accueil']);
    }, err => {
      alert(err.message);
      this.isAuth = false;
      this.router.navigate(['/connexion']);
    })
  }

  // register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration Successful');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/ajoutedutiant']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/connexion']);
    }, err => {
      alert(err.message);
    })
  }

  // forgot password
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-Email']);
    }, err => {
      alert('Something went wrong');
    })
  }

  // email varification
  sendEmailForVarification(user: any) {
    console.log(user);
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/varify-email']);
    }, (err: any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }
  

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
}
