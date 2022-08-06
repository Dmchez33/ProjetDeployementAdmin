import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEtudComponent } from './ajouter-etud.component';

describe('AjouterEtudComponent', () => {
  let component: AjouterEtudComponent;
  let fixture: ComponentFixture<AjouterEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEtudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
