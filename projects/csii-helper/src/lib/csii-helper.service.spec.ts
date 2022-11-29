import { TestBed } from '@angular/core/testing';

import { CsiiHelperService } from './csii-helper.service';

describe('CsiiHelperService', () => {
  let service: CsiiHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsiiHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
