import { TestBed } from '@angular/core/testing';

import { SideDisplayService } from './side-display.service';

describe('SideDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideDisplayService = TestBed.get(SideDisplayService);
    expect(service).toBeTruthy();
  });
});
