import { TestBed } from '@angular/core/testing';

import { ActivebodyService } from './activebody.service';

describe('ActivebodyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivebodyService = TestBed.get(ActivebodyService);
    expect(service).toBeTruthy();
  });
});
