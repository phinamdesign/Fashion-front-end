import { TestBed } from '@angular/core/testing';

import { OderdetailService } from './oderdetail.service';

describe('OderdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OderdetailService = TestBed.get(OderdetailService);
    expect(service).toBeTruthy();
  });
});
