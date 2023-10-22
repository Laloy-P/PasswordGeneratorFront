import { Component } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  generatedPassword: string = '';
  passwordSize: number = 12;
  specialChars: boolean = true;
  upperCase: boolean = true;
  withNumbers : boolean = true;

  constructor(private http: HttpClient) { }

  generatePassword() {
    this.http.get<any>('http://localhost:8080/generatePassword')
      .subscribe(
        (data: any) => {
          this.generatedPassword = data.password;
        }
      );
  }
  generatePasswordWithParam(){
    console.log('TOTO')
    const params = new HttpParams()
      .set('passwordSize', this.passwordSize)
      .set('specialChars', this.specialChars)
      .set('upperCase', this.upperCase)
      .set('withNumbers', this.withNumbers);

    this.http.get<any>('http://localhost:8080/generatePassword2', {params})
      .subscribe(

        (data: any)=> {
          console.log("size",this.passwordSize);
          console.log("specialChar",this.specialChars);
          console.log("upperCase",this.upperCase);
          this.generatedPassword = data.password;
        })
  }

  onSliderValueChanged(value: string){
    const numericValue = parseFloat(value);
    console.log("Value reccupe de l'enfant : ", numericValue);
    this.passwordSize = numericValue;
  }
}


