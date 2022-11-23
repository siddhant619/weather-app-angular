
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { WeatherData } from "./cities/weather.model";
@Injectable({
    providedIn: 'root'
})
export class WeatherService{
    constructor(private http: HttpClient){}
    headers={
        'X-RapidAPI-Host' : environment.XRapidApiHostValue ,
        'X-RapidAPI-Key' : environment.XRapidApiKeyValue
    }
    getWeatherInfo(location : string): Observable<WeatherData>{
        return this.http.get<WeatherData>(environment.weatherApiBaseUrl ,
            {
                headers: new HttpHeaders(this.headers),
                params: {'q': location}
            }
            )

    }
}