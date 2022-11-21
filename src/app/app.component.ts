import { Component, ElementRef, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  city :string= 'paris';
  constructor(private weatherSvc: WeatherService){}
  ngOnInit(){
    this.weatherSvc.getWeatherInfo(this.city);
  }
}
