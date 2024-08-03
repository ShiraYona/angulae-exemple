import { TestBed } from '@angular/core/testing';

import { ServicerTService } from './servicer-t.service';

describe('ServicerTService', () => {
  let service: ServicerTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicerTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
