import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileMetaData } from '../models/file-meta-data.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  
  constructor(private fireStore : AngularFirestore, private fireStorage : AngularFireStorage) { }

  // save meta data of file to firestore
  saveMetaDataOfFile(fileObj : FileMetaData) {

    const fileMeta = {
      id : '',
      name : fileObj.name,
      url : fileObj.url,
      size : fileObj.size
    }

    fileMeta.id = this.fireStore.createId();

    this.fireStore.collection('/Fichier').add(fileMeta);
    
  }

  // dislpay all files
  getAllFiles() {
    return this.fireStore.collection('/Fichier').snapshotChanges();
  }

  // delete file 
  deleteFile(fileMeta : FileMetaData) {
    
    this.fireStore.collection('/Fichier').doc(fileMeta.id).delete();
    this.fireStorage.ref('/Fichier/'+fileMeta.name).delete();

  }
  updateFile(fileMeta: FileMetaData){

    this.deleteFile(fileMeta);
    this.saveMetaDataOfFile(fileMeta);

  }
}
