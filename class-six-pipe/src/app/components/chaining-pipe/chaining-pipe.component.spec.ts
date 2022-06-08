import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainingPipeComponent } from './chaining-pipe.component';

describe('ChainingPipeComponent', () => {
  let component: ChainingPipeComponent;
  let fixture: ComponentFixture<ChainingPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainingPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainingPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
