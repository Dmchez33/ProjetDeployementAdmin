import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Inscription{
  id?: string | null;
  nom?: string;
  prenom?: string;
  email?: string;
  filiere?: string;
  classe?: string;
  annee?: Date;
  password?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ListetudiantService {
  
  constructor(private firestore: Firestore) { }

  getEtudiantListe(): Observable<Inscription[]>{
    const infosRef = collection(this.firestore,'Etudiant');
    return collectionData(infosRef,{idField: 'id'}) as Observable<Inscription[]>;
  }
  getEtudiantListeById(id: any):Observable<Inscription[]>{
    const infosDocRef = doc(this.firestore, `Etudiant/${id}`);
    return docData(infosDocRef, {idField:'id'}) as Observable<Inscription[]>
  }
}
