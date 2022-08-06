import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterInfoComponent } from './ajouter-info.component';

describe('AjouterInfoComponent', () => {
  let component: AjouterInfoComponent;
  let fixture: ComponentFixture<AjouterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
