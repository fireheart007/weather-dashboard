import { useEffect } from 'react';
import { Container, LoadingSpinner, GlobalStyle, GlobalStyles } from './components/styles';
import { SearchBar } from './components/SearchBar';
import { WeatherDisplay } from './components/WeatherDisplay';
import { ForecastDisplay } from './components/ForecastDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { WeatherProvider, useWeather } from './context/WeatherContext';

const WeatherDashboard = () => {
  const { loading, error, currentCity, setCurrentCity } = useWeather();

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity && !currentCity) {
      setCurrentCity(lastCity);
    }
  }, [currentCity, setCurrentCity]);

  return (
    <Container>
      <SearchBar />
      
      {error && (
        <ErrorMessage 
          message={error} 
        />
      )}
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        !error && (
          <>
            <WeatherDisplay />
            <ForecastDisplay />
          </>
        )
      )}
    </Container>
  );
};

const App = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalStyle>
        <WeatherProvider>
          <WeatherDashboard />
        </WeatherProvider>
      </GlobalStyle>
    </>
  );
};

export default App;
