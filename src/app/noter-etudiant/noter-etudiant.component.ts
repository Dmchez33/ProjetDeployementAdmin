import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../models/student.model';
import { AuthenficationService } from '../services/authenfication.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-noter-etudiant',
  templateUrl: './noter-etudiant.component.html',
  styleUrls: ['./noter-etudiant.component.scss']
})
export class NoterEtudiantComponent implements OnInit {

  studentsList: Student[] = [];

  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    filiere: '',
    classe: '',
    matiere: '',
    email: '',
    tel: '',
    Devoir: 0,
    Examen: 0
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  filiere: string = '';
  classe: string = '';
  matiere: string = '';
  email: string = '';
  Devoir: number = 0;
  Examen: number = 0;
  tel: string = '';

  etudDetail !: FormGroup;
  constructor(private formBuilder : FormBuilder, public auth: AuthenficationService, private data: DataService) { }

  ngOnInit(): void {
    this.getAllStudents();
    this.etudDetail = this.formBuilder.group({
      id : [''],
      first_name : [''],
      last_name: [''],
      filiere: [''],
      classe: [''],
      matiere: [''],
      email: [''],
      tel: [''],
      Devoir: 0,
      Examen: 0
    });   
  }
  editEmployee(etud : Student) {
    this.etudDetail.controls['id'].setValue(etud.id);
    this.etudDetail.controls['first_name'].setValue(etud.first_name);
    this.etudDetail.controls['last_name'].setValue(etud.last_name);
    this.etudDetail.controls['filiere'].setValue(etud.filiere);
    this.etudDetail.controls['classe'].setValue(etud.classe);
    this.etudDetail.controls['matiere'].setValue(etud.matiere);
    this.etudDetail.controls['email'].setValue(etud.email);
    this.etudDetail.controls['Devoir'].setValue(etud.Devoir);
    this.etudDetail.controls['Examen'].setValue(etud.Examen);
    this.etudDetail.controls['tel'].setValue(etud.tel);

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
      alert('Erreur lors de la r??cup??ration des donn??es des ??tudiants');
    })

  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.filiere = '';
    this.classe = '';
    this.matiere = '';
    this.email = '';
    this.Devoir = 0;
    this.Examen = 0;
    this.tel = '';
  }

  addStudent() {
    if (this.first_name == '' || this.last_name == ''|| this.matiere == ''  || this.email == '' ) {
      alert('Remplir tous les champs de saisie');
      return;
    }

    this.studentObj.id = '';
    this.studentObj.email = this.email;
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.filiere = this.filiere;
    this.studentObj.classe = this.classe;
    this.studentObj.matiere = this.matiere;
    this.studentObj.Devoir = this.Devoir;
    this.studentObj.Examen = this.Examen;
    this.studentObj.tel = this.tel;

    this.data.addStudent(this.studentObj);
    this.resetForm();

  }

  updateStudent() {
    this.studentObj.id = this.etudDetail.value.id;
    this.studentObj.first_name = this.etudDetail.value.first_name;
    this.studentObj.last_name = this.etudDetail.value.last_name;
    this.studentObj.filiere = this.etudDetail.value.filiere;
    this.studentObj.classe = this.etudDetail.value.classe;
    this.studentObj.matiere = this.etudDetail.value.matiere;
    this.studentObj.email = this.etudDetail.value.email;
    this.studentObj.Devoir = this.etudDetail.value.Devoir;
    this.studentObj.Examen = this.etudDetail.value.Examen;
    this.studentObj.tel = this.etudDetail.value.tel;

     this.data.updateStudent(this.studentObj) //.subscribe((res: any)=>{
    //   console.log(res);
    //   this.getAllStudents();
    // },err=>{
    //   console.log(err);
    // })
  }

  deleteStudent(student: Student) {
    if (window.confirm('Are you sure you want to delete ' + student.first_name + ' ' + student.last_name + ' ?')) {
      this.data.deleteStudent(student);
    }
  }
}
