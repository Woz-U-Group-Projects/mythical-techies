import { TestBed, inject } from '@angular/core/testing';

import { FilmsService } from './film.service';

describe('FilmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmsService]
    });
  });

  it('should be created', inject([FilmsService], (service: FilmsService) => {
    expect(service).toBeTruthy();
  }));
});
