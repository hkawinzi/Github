import { TestBed } from '@angular/core/testing';

import { InfoRequestService } from './info-request.service';

describe('InfoRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoRequestService = TestBed.get(InfoRequestService);
    expect(service).toBeTruthy();
  });
});
