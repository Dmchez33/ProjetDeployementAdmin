import { TestBed } from '@angular/core/testing';

import { ListetudiantService } from './listetudiant.service';

describe('ListetudiantService', () => {
  let service: ListetudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListetudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
