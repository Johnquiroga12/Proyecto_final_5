/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegusuService } from './regusu.service';

describe('Service: Regusu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegusuService]
    });
  });

  it('should ...', inject([RegusuService], (service: RegusuService) => {
    expect(service).toBeTruthy();
  }));
});
