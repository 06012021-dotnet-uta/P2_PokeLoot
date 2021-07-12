import { TestBed } from '@angular/core/testing';

import { CollectCardsService } from './collect-cards.service';

describe('CollectCardsService', () => {
  let service: CollectCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
