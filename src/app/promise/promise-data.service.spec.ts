import { TestBed, inject } from '@angular/core/testing';

import { PromiseDataService } from './promise-data.service';

describe('PromiseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromiseDataService]
    });
  });

  it('should be created', inject([PromiseDataService], (service: PromiseDataService) => {
    expect(service).toBeTruthy();
  }));
});
