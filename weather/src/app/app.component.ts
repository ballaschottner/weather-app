import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherapi: WeatherService) {}

  cityName: string = 'Budapest';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  onHandleClear() {
    this.cityName = ' ';
  }

  private getWeatherData(cityName: string) {
    this.weatherapi.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
