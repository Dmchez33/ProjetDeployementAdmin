import { Component, OnInit } from '@angular/core';
import { AuthenficationService } from '../services/authenfication.service';

@Component({
  selector: 'app-forgot-passe-word',
  templateUrl: './forgot-passe-word.component.html',
  styleUrls: ['./forgot-passe-word.component.scss']
})
export class ForgotPasseWordComponent implements OnInit {
  email : string = '';
  constructor(private auth: AuthenficationService) { }

  ngOnInit(): void {
  }
  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
