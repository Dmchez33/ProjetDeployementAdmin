import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasseWordComponent } from './forgot-passe-word.component';

describe('ForgotPasseWordComponent', () => {
  let component: ForgotPasseWordComponent;
  let fixture: ComponentFixture<ForgotPasseWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasseWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasseWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
