import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveIndicatorComponent } from './active-indicator.component';

describe('ActiveIndicatorComponent', () => {
  let component: ActiveIndicatorComponent;
  let fixture: ComponentFixture<ActiveIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
