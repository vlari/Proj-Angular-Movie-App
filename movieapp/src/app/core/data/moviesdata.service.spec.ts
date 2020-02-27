import { TestBed } from '@angular/core/testing';

import { MoviesdataService } from './moviesdata.service';

describe('MoviesdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesdataService = TestBed.get(MoviesdataService);
    expect(service).toBeTruthy();
  });
});
