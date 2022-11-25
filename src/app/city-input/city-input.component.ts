import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {
  faSearch = faSearch;

  @ViewChild('f') myElement: ElementRef|undefined;
  @Output('cityEnteredEvent') onCityEntered =new  EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    console.log('form submitted', f);
    this.onCityEntered.emit(f.value.city)
  }
}
