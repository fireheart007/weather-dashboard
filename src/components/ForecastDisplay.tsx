import { ForecastContainer, ForecastCard } from './styles';
import { useWeather } from '../context/WeatherContext';
import { useForecastQuery } from '../hooks/useWeatherQueries';
import { getWeatherIconUrl } from '../services/weatherService';
import type { ForecastItem } from '../types/weather';
import { skipToken } from '@tanstack/react-query';

const convertTemp = (celsius: number, unit: 'celsius' | 'fahrenheit'): number => {
  if (unit === 'fahrenheit') {
    return (celsius * 9) / 5 + 32;
  }
  return celsius;
};

export const ForecastDisplay = () => {
  const { currentCity, unit } = useWeather();
  const { data: forecastData } = useForecastQuery(currentCity ?? skipToken);

  if (!forecastData || !currentCity) return null;

  return (
    <ForecastContainer>
      {forecastData.map((forecast: ForecastItem) => {
        const temp = convertTemp(forecast.temperature, unit);
        
        return (
          <ForecastCard key={forecast.date}>
            <div className="date">{forecast.date}</div>
            <img
              src={getWeatherIconUrl(forecast.icon)}
              alt={forecast.description}
              width="50"
              height="50"
            />
            <div className="temp">
              {Math.round(temp)}°{unit === 'celsius' ? 'C' : 'F'}
            </div>
            <div>{forecast.description}</div>
          </ForecastCard>
        );
      })}
    </ForecastContainer>
  );
}; 