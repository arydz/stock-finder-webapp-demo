import { TestBed } from '@angular/core/testing';

import { SfErrorHandlerService } from './sf-error-handler.service';

describe('SfErrorHandlerService', () => {
  let service: SfErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
