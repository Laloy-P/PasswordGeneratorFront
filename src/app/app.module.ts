import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import {FormsModule} from "@angular/forms";
import { SliderCustomComponent } from './slider-custom/slider-custom.component';
import { BlankDashComponent } from './blank-dash/blank-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    SliderCustomComponent,
    BlankDashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
