import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoterEtudiantComponent } from './noter-etudiant.component';

describe('NoterEtudiantComponent', () => {
  let component: NoterEtudiantComponent;
  let fixture: ComponentFixture<NoterEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoterEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoterEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
