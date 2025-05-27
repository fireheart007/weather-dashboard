import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { TemperatureUnit } from '../types/weather';
import { useWeatherQuery, useForecastQuery } from '../hooks/useWeatherQueries';

interface WeatherContextType {
  currentCity: string | null;
  loading: boolean;
  error: string | null;
  unit: TemperatureUnit;
  setCurrentCity: (city: string) => void;
  clearError: () => void;
  toggleUnit: () => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [currentCity, setCurrentCity] = useState<string | null>(() => {
    const savedCity = localStorage.getItem('lastCity');
    return savedCity || null;
  });
  
  const [unit, setUnit] = useState<TemperatureUnit>(() => {
    return (localStorage.getItem('temperatureUnit') as TemperatureUnit) || 'celsius';
  });

  const { 
    isLoading: isLoadingWeather, 
    error: weatherError,
    refetch: refetchWeather
  } = useWeatherQuery(currentCity);
  
  const { 
    isLoading: isLoadingForecast, 
    error: forecastError,
    refetch: refetchForecast
  } = useForecastQuery(currentCity);

  const handleSetCity = useCallback((city: string) => {
    if (!city) return;
    localStorage.setItem('lastCity', city);
    setCurrentCity(city);
  }, []);

  const clearError = useCallback(() => {
    localStorage.removeItem('lastCity');
    setCurrentCity(null);
    refetchWeather();
    refetchForecast();
  }, [refetchWeather, refetchForecast]);

  const toggleUnit = useCallback(() => {
    setUnit(prev => {
      const newUnit = prev === 'celsius' ? 'fahrenheit' : 'celsius';
      localStorage.setItem('temperatureUnit', newUnit);
      return newUnit;
    });
  }, []);

  const error = weatherError?.message || forecastError?.message || null;

  const value: WeatherContextType = {
    currentCity,
    loading: isLoadingWeather || isLoadingForecast,
    error,
    unit,
    setCurrentCity: handleSetCity,
    clearError,
    toggleUnit,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}; 