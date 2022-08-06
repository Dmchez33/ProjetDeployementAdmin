import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { FileMetaData } from '../models/file-meta-data.model';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add student
  addStudent(student : Student) {
    student.id = this.afs.createId();
    return this.afs.collection('/NoterStudents').add(student);
  }

  // get all students
  getAllStudents() {
    return this.afs.collection('/NoterStudents').snapshotChanges();
  }

  // delete student
  deleteStudent(student : Student) {
     this.afs.doc('/NoterStudents/'+student.id).delete();
  }

  // update student
  updateStudent(student : Student) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
}
