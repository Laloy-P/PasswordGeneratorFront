import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankDashComponent } from './blank-dash.component';

describe('BlankDashComponent', () => {
  let component: BlankDashComponent;
  let fixture: ComponentFixture<BlankDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankDashComponent]
    });
    fixture = TestBed.createComponent(BlankDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
