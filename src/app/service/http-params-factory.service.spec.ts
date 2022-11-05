import { TestBed } from '@angular/core/testing';

import { HttpParamsFactory } from './http-params-factory.service';

describe('HttpParamsFactoryService', () => {
  let service: HttpParamsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpParamsFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
