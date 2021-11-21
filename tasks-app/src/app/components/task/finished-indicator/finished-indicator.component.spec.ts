import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedIndicatorComponent } from './finished-indicator.component';

describe('FinishedIndicatorComponent', () => {
  let component: FinishedIndicatorComponent;
  let fixture: ComponentFixture<FinishedIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
