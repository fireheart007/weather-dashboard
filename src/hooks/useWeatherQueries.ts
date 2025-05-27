import { useQuery } from '@tanstack/react-query';
import { fetchWeather, fetchForecast, weatherKeys } from '../services/weatherService';
import type { WeatherData, ForecastData } from '../types/weather';

const POLLING_INTERVAL = 30000; // 30 seconds in milliseconds

export const useWeatherQuery = (city: string | null) => {
  return useQuery<WeatherData, Error>({
    queryKey: weatherKeys.current(city || ''),
    queryFn: () => fetchWeather(city || ''),
    enabled: !!city,
    staleTime: 300000, // Consider data stale after 5 minutes
    gcTime: 3600000, // Keep data in cache for 1 hour
    retry: 1, // Only retry once on failure
    refetchInterval: POLLING_INTERVAL, // Poll every 30 seconds
    refetchIntervalInBackground: true, // Continue polling even when the tab is in the background
  });
};

export const useForecastQuery = (city: string | null) => {
  return useQuery<ForecastData, Error>({
    queryKey: weatherKeys.forecast(city || ''),
    queryFn: () => fetchForecast(city || ''),
    enabled: !!city,
    staleTime: 300000,
    gcTime: 3600000,
    retry: 1,
    refetchInterval: POLLING_INTERVAL,
    refetchIntervalInBackground: true,
  });
}; 