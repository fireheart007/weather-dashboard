import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { useWeather } from '../context/WeatherContext';
import { SearchContainer, Input, Button } from './styles';
import styled from 'styled-components';
import type { City } from '../types/weather';

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  color: #333333;
  font-size: 14px;
`;

const SuggestionItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #333333;
  background: #ffffff;

  &:hover {
    background-color: #f0f0f0;
    color: #000000;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eeeeee;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const { setCurrentCity } = useWeather();
  const debounceTimeout = useRef<NodeJS.Timeout>();

  const fetchCitySuggestions = async (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          query
        )}&limit=5&appid=8c86a6ceef5cf59561b3bf30e060fb2b`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch city suggestions');
      }

      const data: City[] = await response.json();
      setSuggestions(data);
    } catch (error: unknown) {
      console.error('Error fetching city suggestions:', error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    if (searchTerm) {
      debounceTimeout.current = setTimeout(() => {
        fetchCitySuggestions(searchTerm);
      }, 300);
    } else {
      setSuggestions([]);
    }

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [searchTerm]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setCurrentCity(searchTerm.trim());
      setSearchTerm('');
      setSuggestions([]);
    }
  };

  const handleSelectCity = (city: City) => {
    const cityDisplay = city.state
      ? `${city.name}, ${city.state}, ${city.country}`
      : `${city.name}, ${city.country}`;
    setCurrentCity(cityDisplay);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', width: '100%' }}>
        <SearchWrapper>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter city name..."
            aria-label="City name"
          />
          {suggestions.length > 0 && (
            <SuggestionsList>
              {suggestions.map((city, index) => (
                <SuggestionItem
                  key={`${city.name}-${city.lat}-${city.lon}-${index}`}
                  onClick={() => handleSelectCity(city)}
                >
                  {city.state
                    ? `${city.name}, ${city.state}, ${city.country}`
                    : `${city.name}, ${city.country}`}
                </SuggestionItem>
              ))}
            </SuggestionsList>
          )}
        </SearchWrapper>
        <Button type="submit" disabled={!searchTerm.trim()}>
          Search
        </Button>
      </form>
    </SearchContainer>
  );
}; 