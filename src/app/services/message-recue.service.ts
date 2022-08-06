import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageRecueService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }
  getAllStudents() {
    return this.afs.collection('/MessageStudent').snapshotChanges();
  }

  // delete student
  deleteStudent(message : Message) {
     this.afs.doc('/MessageStudent/'+message.id).delete();
  }
}
