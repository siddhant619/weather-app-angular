
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class WeatherService{
    constructor(private http: HttpClient){}
    headers={
        'X-RapidAPI-Key': '649503419amsh1554b27ddf6412dp17462fjsn9cc05ac323b0',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
    getWeatherInfo(location : string){
        this.http.get('https://weatherapi-com.p.rapidapi.com/current.json',
            {
                headers: new HttpHeaders(this.headers),
                params: {'q': location}
            }
            ).subscribe({
                next: response=>{
                        console.log('from weather: ', response)
                        },
                error:error=>{
                        console.log('error!!: ', error)
                        }
                }
            )

    }
}