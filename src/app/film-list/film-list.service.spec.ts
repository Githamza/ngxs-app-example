import { TestBed, inject } from '@angular/core/testing';

import { FilmListService } from './film-list.service';

describe('FilmListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmListService]
    });
  });

  it('should be created', inject([FilmListService], (service: FilmListService) => {
    expect(service).toBeTruthy();
  }));
});
