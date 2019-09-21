import { TestBed } from '@angular/core/testing';

import { PWAServiceService } from './pwaservice.service';

describe('PWAServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PWAServiceService = TestBed.get(PWAServiceService);
    expect(service).toBeTruthy();
  });
});
