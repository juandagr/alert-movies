import { TestBed, inject } from '@angular/core/testing';

import { TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvShowService]
    });
  });

  it('should be created', inject([TvShowService], (service: TvShowService) => {
    expect(service).toBeTruthy();
  }));
});
