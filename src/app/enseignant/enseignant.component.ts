import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfListe } from '../models/ProfLit.model';
import { AuthenficationService } from '../services/authenfication.service';
import { ProfListeService } from '../services/prof-liste.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
  studentsList: ProfListe[] = [];
  studentObj: ProfListe = {
    id: '',
    first_name: '',
    last_name: '',
    grade: '',
    specialite: '',
    email: '',
    tel: ''
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  grade: string = '';
  specialite: string = '';
  email: string = '';
  tel: string = '';


  etudDetail !: FormGroup;
  constructor(private formBuilder : FormBuilder, public auth: AuthenficationService, private data: ProfListeService) { }

  ngOnInit(): void {
    this.getAllStudents();
    this.etudDetail = this.formBuilder.group({
      id : [''],
      first_name : [''],
      last_name: [''],
      grade: [''],
      specialite: [''],
      email: [''],
      tel: [''],
    });   
  }
  editEmployee(etud : ProfListe) {
    this.etudDetail.controls['id'].setValue(etud.id);
    this.etudDetail.controls['first_name'].setValue(etud.first_name);
    this.etudDetail.controls['last_name'].setValue(etud.last_name);
    this.etudDetail.controls['grade'].setValue(etud.grade);
    this.etudDetail.controls['specialite'].setValue(etud.specialite);
    this.etudDetail.controls['email'].setValue(etud.email);
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
      alert('Erreur lors de la récupération des données des étudiants');
    })

  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.grade = '';
    this.specialite = '';
    this.email = '';
    this.tel = '';
  }

  addStudent() {
    if (this.first_name == '' || this.last_name == '' ) {
      alert('Remplir tous les champs de saisie');
      return;
    }

    this.studentObj.id = '';
    this.studentObj.email = this.email;
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.specialite = this.specialite;
    this.studentObj.grade = this.grade;
    this.studentObj.tel = this.tel;
    this.data.addStudent(this.studentObj);
    this.resetForm();

  }

  updateStudent() {
    this.studentObj.id = this.etudDetail.value.id;
    this.studentObj.first_name = this.etudDetail.value.first_name;
    this.studentObj.last_name = this.etudDetail.value.last_name;
    this.studentObj.grade = this.etudDetail.value.grade;
    this.studentObj.specialite = this.etudDetail.value.specialite;
    this.studentObj.email = this.etudDetail.value.email;
    
    this.studentObj.tel = this.etudDetail.value.tel;

     this.data.updateStudent(this.studentObj) //.subscribe((res: any)=>{
    //   console.log(res);
    //   this.getAllStudents();
    // },err=>{
    //   console.log(err);
    // })
  }

  deleteStudent(student: ProfListe) {
    if (window.confirm('Êtes vous sur de supprimer ' + student.first_name + ' ' + student.last_name + ' ?')) {
      this.data.deleteStudent(student);
    }
  }



}
