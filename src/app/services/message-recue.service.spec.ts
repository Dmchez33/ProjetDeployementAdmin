import { TestBed } from '@angular/core/testing';

import { MessageRecueService } from './message-recue.service';

describe('MessageRecueService', () => {
  let service: MessageRecueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageRecueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
