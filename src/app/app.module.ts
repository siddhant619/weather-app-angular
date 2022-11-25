import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import { WeatherService } from './weather.service';
import { CitiesComponent } from './cities/cities.component';
import { FormsModule } from '@angular/forms';
import { CityInputComponent } from './city-input/city-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityInputComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
