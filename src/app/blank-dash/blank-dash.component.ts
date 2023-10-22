import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-blank-dash',
  templateUrl: './blank-dash.component.html',
  styleUrls: ['./blank-dash.component.css']
})
export class BlankDashComponent {
  @Input() numberOfDash: number = 0; // Input variable for the number of divs
  @Input() generatedPassword: string = "";

  letter: String = "A";
  password: String="PASSWORD";
  randChar: string= Math.random().toString();

  stringAsArray: string[] = [];

  constructor() {
    this.stringAsArray = this.password.split('');
  }

  get dashIndexes(): number[] {
    return Array.from({ length: this.numberOfDash }, (_, i) => i + 1);
  }
  getRandomChar():string{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  getFromPasswordCharAt(index: number):string {
    if(this.generatedPassword != null) {
      return this.generatedPassword[index];
    }
    else {
     return this.getRandomChar();
    }
  }

}
