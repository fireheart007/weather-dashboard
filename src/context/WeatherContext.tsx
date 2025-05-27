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
  // Initialize state from localStorage
  const [currentCity, setCurrentCity] = useState<string | null>(() => {
    return localStorage.getItem('lastCity');
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
    localStorage.setItem('lastCity', city);
    setCurrentCity(city);
  }, []);

  const clearError = useCallback(() => {
    setCurrentCity(null);
    localStorage.removeItem('lastCity');
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

  // Combine errors from both queries
  const error = weatherError?.message || forecastError?.message || null;

  return (
    <WeatherContext.Provider
      value={{
        currentCity,
        loading: isLoadingWeather || isLoadingForecast,
        error,
        unit,
        setCurrentCity: handleSetCity,
        clearError,
        toggleUnit,
      }}
    >
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