/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GaragesService } from './garages.service';

describe('GaragesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaragesService]
    });
  });

  it('should ...', inject([GaragesService], (service: GaragesService) => {
    expect(service).toBeTruthy();
  }));
});
