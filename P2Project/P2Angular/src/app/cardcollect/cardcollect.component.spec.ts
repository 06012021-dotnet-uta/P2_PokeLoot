import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollectComponent } from './cardcollect.component';

describe('CardCollectComponent', () => {
  let component: CardCollectComponent;
  let fixture: ComponentFixture<CardCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCollectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
