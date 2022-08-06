import { Component } from '@angular/core';
import { AuthenficationService } from './services/authenfication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthenficationService){

  }
  logout(){
    this.auth.logout();
  }
}
