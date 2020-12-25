import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPersonnelComponent } from './display-personnel.component';

describe('DisplayPersonnelComponent', () => {
  let component: DisplayPersonnelComponent;
  let fixture: ComponentFixture<DisplayPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
