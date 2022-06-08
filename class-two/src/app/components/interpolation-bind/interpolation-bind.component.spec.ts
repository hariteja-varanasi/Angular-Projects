import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationBindComponent } from './interpolation-bind.component';

describe('InterpolationBindComponent', () => {
  let component: InterpolationBindComponent;
  let fixture: ComponentFixture<InterpolationBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
