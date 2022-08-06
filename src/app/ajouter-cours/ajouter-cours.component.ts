import { Component, OnInit } from '@angular/core';
// import { Storage, ref,uploadBytesResumable ,getDownloadURL } from '@angular/fire/storage'
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileMetaData } from 'src/app/models/file-meta-data.model';
import { FileService } from 'src/app/services/file.service';
import { finalize } from 'rxjs/operators';
import { empty } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-ajouter-cours',
  templateUrl: './ajouter-cours.component.html',
  styleUrls: ['./ajouter-cours.component.scss']
})
export class AjouterCoursComponent implements OnInit {
  selectedFiles !: FileList;
  currentFileUpload !: FileMetaData;
  percentage: number = 0;

  listOfFiles : FileMetaData[] = [];


  constructor(private fileService: FileService, private fireStorage: AngularFireStorage, private dataService : DataService) { }

  ngOnInit(): void {
    this.getAllFiles();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
     this.currentFileUpload =  new FileMetaData(this.selectedFiles[0]);
     const path = 'Fichier/'+this.currentFileUpload.file.name;

     const storageRef = this.fireStorage.ref(path);
     const uploadTask = storageRef.put(this.selectedFiles[0]);

     uploadTask.snapshotChanges().pipe(finalize( () => {
        storageRef.getDownloadURL().subscribe(downloadLink => {
          this.currentFileUpload.id = '';
          this.currentFileUpload.url = downloadLink;
          this.currentFileUpload.size = this.currentFileUpload.file.size;
          this.currentFileUpload.name = this.currentFileUpload.file.name;

          this.fileService.saveMetaDataOfFile(this.currentFileUpload);
        })
        this.ngOnInit();
     })
     ).subscribe( (res : any) => {
        this.percentage = (res.bytesTransferred * 100 / res.totalBytes);
     }, err => {
        console.log('Error occured');
     });
    }

    getAllFiles() {
      this.fileService.getAllFiles().subscribe( res => {
          this.listOfFiles = res.map((e : any) => {
              const data = e.payload.doc.data();
              data.id = e.payload.doc.id;
              //console.log(data);
              return data;
          });
      }, err => {
          console.log('Error occured while fetching file meta data');
      })
    }
  
    deleteFile(file : FileMetaData) {
  
      if(window.confirm('Are you sure you want to delete '+file.name   + '?')) {
        this.fileService.deleteFile(file);
        this.ngOnInit();
     }
      
    }
  // public file: any={};

  // constructor(public storage: Storage) { }


  // ngOnInit(): void {
  // }



  // choisirFichier(event: any){
  //   this.file = event.target.files[0]

  // }
  // addData(){
  //   const storageRef = ref(this.storage, this.file.name);
  //   const uploadTask = uploadBytesResumable(storageRef, this.file);
  //   uploadTask.on('state_changed',
  //   (snapshot) => {
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log('Upload is ' + progress + '% done');
  //   },
  //   () => {
  //     // Upload completed successfully, now we can get the download URL
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       console.log('File available at', downloadURL);
  //     });
  //   }
  //   )
    
  // }

}
