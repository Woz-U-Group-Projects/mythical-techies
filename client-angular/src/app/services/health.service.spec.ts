import { TestBed, inject } from '@angular/core/testing';

import { HealthService } from './health.service';

describe('HealthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthService]
    });
  });

  it('should be created', inject([HealthService], (service: HealthService) => {
    expect(service).toBeTruthy();
  }));
});
