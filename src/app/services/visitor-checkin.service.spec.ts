import { TestBed } from '@angular/core/testing';

import { VisitorCheckinService } from './visitor-checkin.service';

describe('VisitorCheckinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitorCheckinService = TestBed.get(VisitorCheckinService);
    expect(service).toBeTruthy();
  });
});
