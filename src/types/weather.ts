export type TemperatureUnit = 'celsius' | 'fahrenheit';

export interface City {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

export interface ForecastItem {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

export type ForecastData = ForecastItem[];

export interface WeatherError {
  message: string;
} 