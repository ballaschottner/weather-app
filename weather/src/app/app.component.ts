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

  isCelsius = true;

  cityName: string = 'Budapest';
  weatherData?: WeatherData;
  cData?: number;
  cDataMin?: number;
  cDataMax?: number;

  dateNow: Date = new Date();
  sunSetTime?: number;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  onHandleClear() {
    this.cityName = ' ';
  }

  onChangeValue() {
    this.isCelsius = !this.isCelsius;
  }

  private celsiusToF(tempF: number) {
    return ((tempF - 32) * 5) / 9;
  }

  private getWeatherData(cityName: string) {
    this.weatherapi.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
        this.sunSetTime = response.sys.sunrise;
        this.countDate(this.dateNow, this.sunSetTime);
        this.cData = this.celsiusToF(response.main.temp);
        this.cDataMin = this.celsiusToF(response.main.temp_min);
        this.cDataMax = this.celsiusToF(response.main.temp_max);
      },
    });
  }

  private countDate(now: Date, time: any) {
    console.log('time', now, time);
  }
}
