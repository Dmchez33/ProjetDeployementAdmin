import { TestBed } from '@angular/core/testing';

import { ProfListeService } from './prof-liste.service';

describe('ProfListeService', () => {
  let service: ProfListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
