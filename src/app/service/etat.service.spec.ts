import { TestBed } from '@angular/core/testing';

import {EtatServiceService} from "./etat.service";

describe('EtatService', () => {
  let service: EtatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
