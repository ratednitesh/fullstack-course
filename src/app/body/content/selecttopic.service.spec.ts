import { TestBed } from '@angular/core/testing';

import { SelecttopicService } from './selecttopic.service';

describe('SelecttopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelecttopicService = TestBed.get(SelecttopicService);
    expect(service).toBeTruthy();
  });
});
