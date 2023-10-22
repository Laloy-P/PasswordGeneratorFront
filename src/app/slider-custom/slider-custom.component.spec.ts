import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCustomComponent } from './slider-custom.component';

describe('SliderCustomComponent', () => {
  let component: SliderCustomComponent;
  let fixture: ComponentFixture<SliderCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderCustomComponent]
    });
    fixture = TestBed.createComponent(SliderCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
