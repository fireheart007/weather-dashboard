import { WeatherCard, WeatherInfo, Button } from './styles';
import { useWeather } from '../context/WeatherContext';
import { useWeatherQuery } from '../hooks/useWeatherQueries';
import { getWeatherIconUrl } from '../services/weatherService';
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi';
import { LastUpdated } from './LastUpdated';

interface WeatherDetailProps {
  icon: React.ComponentType<{ size: number }>;
  label: string;
  value: string;
}

const convertTemp = (celsius: number, unit: 'celsius' | 'fahrenheit'): number => {
  if (unit === 'fahrenheit') {
    return (celsius * 9) / 5 + 32;
  }
  return celsius;
};

const WeatherDetail = ({ icon: Icon, label, value }: WeatherDetailProps) => (
  <div className="detail-item">
    <Icon size={24} />
    <span className="label">{label}</span>
    <span className="value">{value}</span>
  </div>
);

export const WeatherDisplay = () => {
  const { currentCity, unit, toggleUnit } = useWeather();
  const { data: weatherData } = useWeatherQuery(currentCity);

  if (!weatherData || !currentCity) return null;

  const temp = convertTemp(weatherData.temperature, unit);

  return (
    <WeatherCard>
      <WeatherInfo>
        <div className="main-info">
          <h2 className="city-name">{currentCity}</h2>
          <div className="temperature">
            {Math.round(temp)}°{unit === 'celsius' ? 'C' : 'F'}
          </div>
          <div className="description">
            <img
              src={getWeatherIconUrl(weatherData.icon)}
              alt={weatherData.description}
              width="50"
              height="50"
            />
            {weatherData.description}
          </div>
          <LastUpdated />
        </div>
        <div className="details">
          <h3>Weather Details</h3>
          <WeatherDetail 
            icon={WiThermometer}
            label="Temperature"
            value={`${Math.round(temp)}°${unit === 'celsius' ? 'C' : 'F'}`}
          />
          <WeatherDetail 
            icon={WiHumidity}
            label="Humidity"
            value={`${weatherData.humidity}%`}
          />
          <WeatherDetail 
            icon={WiStrongWind}
            label="Wind Speed"
            value={`${weatherData.windSpeed} m/s`}
          />
          <Button 
            onClick={toggleUnit} 
            style={{ 
              marginTop: '1.5rem',
              width: '100%'
            }}
          >
            Switch to {unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}
          </Button>
        </div>
      </WeatherInfo>
    </WeatherCard>
  );
}; 