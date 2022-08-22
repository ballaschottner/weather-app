export interface WeatherData {
  coord: Coord;
  clouds: Clouds;
  cod: number;
  name: string;
  main: Main;
  timezone: number;
  visibility: number;
  sys: Sys;
  weather: Weather[];
  wind: Wind;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: 2;
}

export interface Weather {
  id: number;
  main: Clouds;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
