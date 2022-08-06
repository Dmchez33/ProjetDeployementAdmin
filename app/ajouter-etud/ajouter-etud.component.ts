import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student.model';
import { StudentListe } from '../models/StudentListe.model';
import { AuthenficationService } from '../services/authenfication.service';
import { DataService } from '../services/data.service';
import { InfoService } from '../services/info.service';
import { SudentListeService } from '../services/sudent-liste.service';
// import { Router } from '@angular/router';
// import { HotToastService } from '@ngneat/hot-toast';
// import { AuthenficationService } from '../services/authenfication.service';

@Component({
  selector: 'app-ajouter-etud',
  templateUrl: './ajouter-etud.component.html',
  styleUrls: ['./ajouter-etud.component.scss']
})
export class AjouterEtudComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   password: new FormControl('',Validators.required)
  // })  
  Authemail : string = '';
  Authpassword : string = '';
  studentsList: StudentListe[] = [];
  studentObj: StudentListe = {
    id: '',
    first_name: '',
    last_name: '',
    filiere: '',
    classe: '',
    email: '',
    tel: '',
    matricule: '',
    motPasse: '',
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  filiere: string = '';
  classe: string = '';
  email: string = '';
  tel: string = '';
  matricule: string = '';
  motPasse: string = '';


  etudDetail !: FormGroup;
  constructor(private formBuilder : FormBuilder, public auth: AuthenficationService, private data: SudentListeService) { }

  ngOnInit(): void {
    this.getAllStudents();
    this.etudDetail = this.formBuilder.group({
      id : [''],
      first_name : [''],
      last_name: [''],
      filiere: [''],
      classe: [''],
      email: [''],
      tel: [''],
      matricule: [''],
      motPasse: [''],
    });   
  }
  editEmployee(etud : StudentListe) {
    this.etudDetail.controls['id'].setValue(etud.id);
    this.etudDetail.controls['first_name'].setValue(etud.first_name);
    this.etudDetail.controls['last_name'].setValue(etud.last_name);
    this.etudDetail.controls['filiere'].setValue(etud.filiere);
    this.etudDetail.controls['classe'].setValue(etud.classe);
    this.etudDetail.controls['email'].setValue(etud.email);
    this.etudDetail.controls['tel'].setValue(etud.tel);
    this.etudDetail.controls['matricule'].setValue(etud.matricule);
    this.etudDetail.controls['motPasse'].setValue(etud.motPasse);
    

  }


  // register() {
  //   this.auth.logout();
  // }

  getAllStudents() {

    this.data.getAllStudents().subscribe(res => {

      this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Erreur lors de la récupération des données des étudiants');
    })

  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.filiere = '';
    this.classe = '';
    this.tel = '';
    this.email = '';
    this.matricule = '';
    this.motPasse = '';
   
  }

  addStudent() {
    if (this.first_name == '' || this.last_name == '' || this.filiere == '' || this.classe == '' || this.tel == '' ) {
      alert('Remplir tous les champs de saisie');
      return;
    }

    this.studentObj.id = '';
    this.studentObj.email = this.email;
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.filiere = this.filiere;
    this.studentObj.classe = this.classe;
    this.studentObj.tel = this.tel;
    this.studentObj.matricule = this.matricule;
    this.studentObj.motPasse = this.motPasse;
    this.data.addStudent(this.studentObj);
    this.resetForm();

  }

  updateStudent() {
    this.studentObj.id = this.etudDetail.value.id;
    this.studentObj.first_name = this.etudDetail.value.first_name;
    this.studentObj.last_name = this.etudDetail.value.last_name;
    this.studentObj.filiere = this.etudDetail.value.filiere;
    this.studentObj.classe = this.etudDetail.value.classe;
    this.studentObj.email = this.etudDetail.value.email;
    this.studentObj.matricule = this.etudDetail.value.matricule;
    this.studentObj.tel = this.etudDetail.value.tel;
    this.studentObj.motPasse = this.etudDetail.value.motPasse;

     this.data.updateStudent(this.studentObj) //.subscribe((res: any)=>{
    //   console.log(res);
    //   this.getAllStudents();
    // },err=>{
    //   console.log(err);
    // })
  }

  deleteStudent(student: StudentListe) {
    if (window.confirm('Êtes vous sur de supprimer ' + student.first_name + ' ' + student.last_name + ' ?')) {
      this.data.deleteStudent(student);
    }
  }

  // submit(){
  //   if(!this.loginForm.valid){
  //     return ;
  //   }

  //   const {email, password} = this.loginForm.value;
  //   this.auth.registre( email, password).pipe(
  //     this.toast.observe({
  //       success: 'Enregistremaent Validé !',
  //       loading: 'en chargement....',
  //       error: 'Erreur de connexion'
  //     })
  //   ).subscribe( () => {
  //     this.router.navigate(['/ajoutedutiant'])

  //   })
  // }

  //Authenfication dans la base de donne
  register() {

    if(this.Authemail == '') {
      alert('Please enter email');
      return;
    }

    if(this.Authpassword == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.Authemail,this.Authpassword);
    
    this.Authemail = '';
    this.Authpassword = '';

  }
}
