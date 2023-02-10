/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegpersoService } from './regperso.service';

describe('Service: Regperso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegpersoService]
    });
  });

  it('should ...', inject([RegpersoService], (service: RegpersoService) => {
    expect(service).toBeTruthy();
  }));
});
