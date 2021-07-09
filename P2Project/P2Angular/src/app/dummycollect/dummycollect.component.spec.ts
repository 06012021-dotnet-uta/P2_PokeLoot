import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummycollectComponent } from './dummycollect.component';

describe('DummycollectComponent', () => {
  let component: DummycollectComponent;
  let fixture: ComponentFixture<DummycollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummycollectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummycollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
