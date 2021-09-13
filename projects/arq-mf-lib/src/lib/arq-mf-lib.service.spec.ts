import { TestBed } from '@angular/core/testing';

import { ArqMfLibService } from './arq-mf-lib.service';

describe('ArqMfLibService', () => {
  let service: ArqMfLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArqMfLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
