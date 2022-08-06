import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.model';
import { AuthenficationService } from '../services/authenfication.service';
import { MessageRecueService } from '../services/message-recue.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent implements OnInit {
  MessageList: Message[] = [];
  constructor(private data: MessageRecueService, public auth : AuthenficationService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents() {

    this.data.getAllStudents().subscribe(res => {

      this.MessageList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Erreur lors de la récupération des données des étudiants');
    })

  }

}
