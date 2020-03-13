import { TestBed, inject } from '@angular/core/testing';

import { SportsService } from './sports.service';

describe('SportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportsService]
    });
  });

  it('should be created', inject([SportsService], (service: SportsService) => {
    expect(service).toBeTruthy();
  }));
});
