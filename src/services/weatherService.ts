import type { WeatherData, ForecastData } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '8c86a6ceef5cf59561b3bf30e060fb2b';
const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL || 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${API_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch weather data');
    }
    
    // Transform the API response to match our WeatherData interface
    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export const fetchForecast = async (city: string): Promise<ForecastData> => {
  try {
    const response = await fetch(
      `${API_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch forecast data');
    }
    
    // Get one forecast per day (every 8th item as the API returns 3-hour forecasts)
    const dailyForecasts = data.list.filter((_: any, index: number) => index % 8 === 0);

    // Transform the API response to match our ForecastData type
    return dailyForecasts.map((forecast: any) => ({
      date: new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      }),
      temperature: forecast.main.temp,
      description: forecast.weather[0].description,
      icon: forecast.weather[0].icon
    }));
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Query keys for React Query
export const weatherKeys = {
  all: ['weather'] as const,
  current: (city: string) => [...weatherKeys.all, 'current', city] as const,
  forecast: (city: string) => [...weatherKeys.all, 'forecast', city] as const,
}; 