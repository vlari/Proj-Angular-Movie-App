import { TestBed } from '@angular/core/testing';

import { NewsdataService } from './newsdata.service';

describe('NewsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsdataService = TestBed.get(NewsdataService);
    expect(service).toBeTruthy();
  });
});
