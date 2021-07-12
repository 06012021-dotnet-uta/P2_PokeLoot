import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcollectComponent } from './cardcollect.component';

describe('DummycollectComponent', () => {
  let component: CardcollectComponent;
  let fixture: ComponentFixture<CardcollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcollectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
