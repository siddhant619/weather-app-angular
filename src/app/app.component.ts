import { Component, ElementRef, isDevMode, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather, WeatherData } from './cities/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  city :string= 'paris';
  
  weatherInfo:Weather={city: '',temp_c: 0, precip_mm: 0, wind:'', humidity:''};
  constructor(private weatherSvc: WeatherService){
    
  }

  ngOnInit(){
    this.weatherSvc.getWeatherInfo(this.city)
    .subscribe({
      next: (response:WeatherData)=>{
              console.log(': ', response)
              this.weatherInfo.city=response.location.name
              this.weatherInfo.temp_c=(response.current.temp_c)
              this.weatherInfo.precip_mm=(response.current.precip_mm)
              this.weatherInfo.wind=String(response.current.wind_kph)
              this.weatherInfo.humidity=String(response.current.humidity)
              },
      error:error=>{
              console.log('error!!: ', error)
              }
      }
  )

  }
  onCitySelected(event: string){
    console.log('from app, ',event)
    this.city=event;
    this.weatherSvc.getWeatherInfo(this.city)
    .subscribe({
      next: (response:any)=>{
              console.log(': ', response)
              this.weatherInfo.city=response.location.name
              this.weatherInfo.temp_c=response.current.temp_c
              this.weatherInfo.precip_mm=response.current.precip_mm
              this.weatherInfo.wind=response.current.wind_kph
              this.weatherInfo.humidity=response.current.humidity
              },
      error:error=>{
              console.log('error!!: ', error)
              }
      }
  )
  }
}
