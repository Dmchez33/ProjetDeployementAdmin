import { TestBed } from '@angular/core/testing';

import { SudentListeService } from './sudent-liste.service';

describe('SudentListeService', () => {
  let service: SudentListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudentListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
