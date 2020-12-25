import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReservationComponent } from './display-reservation.component';

describe('DisplayReservationComponent', () => {
  let component: DisplayReservationComponent;
  let fixture: ComponentFixture<DisplayReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
