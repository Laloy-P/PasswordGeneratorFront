import {Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-slider-custom',
  templateUrl: './slider-custom.component.html',
  styleUrls: ['./slider-custom.component.css']
})
export class SliderCustomComponent {
  rangeValue: number = 12;
  @Output() valueChanged = new EventEmitter<string>();

  onRangeValueChanged(rangeValue: number) {
    this.valueChanged.emit(rangeValue.toString());
  }

}
