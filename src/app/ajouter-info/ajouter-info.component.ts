import { Component, OnInit } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection
} from '@angular/fire/firestore'
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { AddInfo } from '../models/AddInfo.model';
import { AuthenficationService } from '../services/authenfication.service';
import { DataService } from '../services/data.service';

import { InfoService } from '../services/info.service';
@Component({
  selector: 'app-ajouter-info',
  templateUrl: './ajouter-info.component.html',
  styleUrls: ['./ajouter-info.component.scss']
})
export class AjouterInfoComponent implements OnInit {
  // infott!: AddInfo;
  // ajoutForm = new FormGroup({
  //   titre: new FormControl(''),
  //   contenu: new FormControl('')

  // })
  isInf : boolean = false
  studentObj: AddInfo = {
    id: '',
    titre: '',
    contenu: '',
    classe: '',
    filiere: '',
  };
  id: string = '';
  titre: string = '';
  contenu: string = '';
  classe: string = '';
  filiere: string = '';
  constructor(private formBuilder : FormBuilder, private auth: AuthenficationService, private data: InfoService) {
    // this.serviceInfos.getInfos().subscribe(res => {
    //   console.log(res);
    // })
   }

  ngOnInit(): void {
  }
  resetForm() {
    this.id = '';
    this.titre= '';
    this.contenu = '';
    this.filiere = '';
    this.classe = '';
    
  }

  addStudent() {
    if (this.titre == '' || this.contenu == '') {
      alert('Remplir tous les champs de saisie');
      this.isInf = false
      return;
    }

    this.studentObj.id = '';
    this.studentObj.titre = this.titre;
    this.studentObj.contenu = this.contenu;
    this.studentObj.filiere = this.filiere;
    this.studentObj.classe = this.classe;
    this.data.addStudent(this.studentObj);
    this.isInf = true
    this.resetForm();

  }
  // addInfos(value: any){
  //     this.serviceInfos.addInfos(value);
      
  //     console.log(value)
    
  // }

  // delete(){
  //   this.serviceInfos.deleteInfos(this.infott)
  // }

}
