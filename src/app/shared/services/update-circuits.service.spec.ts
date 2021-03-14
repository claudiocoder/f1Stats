import { TestBed } from '@angular/core/testing';

import { UpdateCircuitsService } from './update-circuits.service';

describe('UpdateCircuitsService', () => {
  let service: UpdateCircuitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCircuitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
