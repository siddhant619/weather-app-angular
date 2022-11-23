import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: string[]=['new delhi','california', 'san jose', 'sydney', 'chennai']
  @Output() citySelectedEvent= new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  citySelected(city: string){
    this.citySelectedEvent.emit(city)
  }

}
