import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreuinionComponent } from './addreuinion.component';

describe('AddreuinionComponent', () => {
  let component: AddreuinionComponent;
  let fixture: ComponentFixture<AddreuinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreuinionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddreuinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
