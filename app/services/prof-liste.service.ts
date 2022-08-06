import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ProfListe } from '../models/ProfLit.model';

@Injectable({
  providedIn: 'root'
})
export class ProfListeService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add student
  addStudent(student : ProfListe) {
    student.id = this.afs.createId();
    return this.afs.collection('/ProfListe').add(student);
  }

  // get all students
  getAllStudents() {
    return this.afs.collection('/ProfListe').snapshotChanges();
  }

  // delete student
  deleteStudent(student : ProfListe) {
     this.afs.doc('/ProfListe/'+student.id).delete();
  }

  // update student
  updateStudent(student : ProfListe) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
}
