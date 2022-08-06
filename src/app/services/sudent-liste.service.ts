import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { StudentListe } from '../models/StudentListe.model';

@Injectable({
  providedIn: 'root'
})
export class SudentListeService {
  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add student
  addStudent(student : StudentListe) {
    student.id = this.afs.createId();
    return this.afs.collection('/StudentsListe').add(student);
  }

  // get all students
  getAllStudents() {
    return this.afs.collection('/StudentsListe').snapshotChanges();
  }

  // delete student
  deleteStudent(student : StudentListe) {
     this.afs.doc('/StudentsListe/'+student.id).delete();
  }

  // update student
  updateStudent(student : StudentListe) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
}
