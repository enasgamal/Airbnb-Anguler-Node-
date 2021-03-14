import { TestBed } from '@angular/core/testing';

import { OnlineExperienceService } from './online-experience.service';

describe('OnlineExperienceService', () => {
  let service: OnlineExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
