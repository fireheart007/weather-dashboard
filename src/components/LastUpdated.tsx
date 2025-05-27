import { useEffect, useState } from 'react';
import { useWeatherQuery } from '../hooks/useWeatherQueries';
import { useWeather } from '../context/WeatherContext';
import { skipToken } from '@tanstack/react-query';

export const LastUpdated = () => {
  const { currentCity } = useWeather();
  const { dataUpdatedAt } = useWeatherQuery(currentCity ?? skipToken);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const formatTime = (timestamp: number) => {
      const date = new Date(timestamp);
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    };

    const updateTime = () => {
      if (dataUpdatedAt) {
        setLastUpdated(`Last updated: ${formatTime(dataUpdatedAt)}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [dataUpdatedAt]);

  if (!lastUpdated) return null;

  return <div className="last-updated">{lastUpdated}</div>;
}; 