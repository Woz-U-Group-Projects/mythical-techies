import { TestBed, inject } from '@angular/core/testing';

import { TechService } from './tech.service';

describe('TechService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechService]
    });
  });

  it('should be created', inject([TechService], (service: TechService) => {
    expect(service).toBeTruthy();
  }));
});
