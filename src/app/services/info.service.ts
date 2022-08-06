import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AddInfo } from '../models/AddInfo.model';



@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }

  addStudent(student : AddInfo) {
    student.id = this.afs.createId();
    return this.afs.collection('/Information').add(student);
  }


  // getInfos(): Observable<AddInfo[]>{
  //   const infosRef = collection(this.firestore,'infos');
  //   return collectionData(infosRef,{idField: 'id'}) as Observable<AddInfo[]>;
  // }
  // getInfosById(id: any):Observable<AddInfo[]>{
  //   const infosDocRef = doc(this.firestore, `infos/${id}`);
  //   return docData(infosDocRef, {idField:'id'}) as Observable<AddInfo[]>
  // }
  
  // addInfos(info: AddInfo){
  //   const infosRef = collection(this.firestore,'infos');
  //   return addDoc(infosRef,info);
  // }

  // deleteInfos(info: AddInfo){
  //   const infosRef = doc(this.firestore,`infos/${info.id}`);
  //   return deleteDoc(infosRef);
  // }

  // updateInfos(info: AddInfo){
  //   const infosRef = doc(this.firestore,`infos/${info.id}`);
  //   return updateDoc(infosRef,{titre: info.titre, contenu:info.contenu});
  // }
}
