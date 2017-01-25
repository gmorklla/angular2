/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlertSService } from './alert-s.service';

describe('AlertSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertSService]
    });
  });

  it('should ...', inject([AlertSService], (service: AlertSService) => {
    expect(service).toBeTruthy();
  }));
});
