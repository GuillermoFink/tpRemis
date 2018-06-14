import { TestBed, inject } from '@angular/core/testing';

import { HttpgoogleService } from './httpgoogle.service';

describe('HttpgoogleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpgoogleService]
    });
  });

  it('should be created', inject([HttpgoogleService], (service: HttpgoogleService) => {
    expect(service).toBeTruthy();
  }));
});
