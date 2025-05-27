import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-x: hidden;
  }
`;

export const GlobalStyle = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #00B4DB 0%, #0083B0 100%);
  color: #ffffff;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  margin: 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 788px) {
    height: auto;
    min-height: 100vh;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 568px) {
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 95%;
  max-width: 600px;
  margin: 1rem auto;
  display: flex;
  gap: 0.5rem;
  z-index: 10;
  padding: 0 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  @media (max-width: 320px) {
    padding: 0 0.25rem;
    margin: 0.5rem auto;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  backdrop-filter: blur(10px);
  min-width: 200px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    min-width: 100%;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  white-space: nowrap;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

export const WeatherCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem 0 2rem;
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0 1rem;
  }

  .city-name {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
  }

  .temperature {
    font-size: 6rem;
    font-weight: 300;
    line-height: 1;
    margin: 1rem 0;
  }

  .weather-icon {
    width: 64px;
    height: 64px;
    margin: 1rem 0;
  }

  .description {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .wind-info {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1rem;
    }
  }
`;

export const WeatherInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 1rem;

  @media (max-width: 320px) {
    padding: 0 0.5rem;
  }

  .main-info {
    margin-bottom: 2rem;
    width: 100%;

    .city-name {
      font-size: clamp(1.25rem, 5vw, 2rem);
      margin-bottom: 0.5rem;
    }

    .temperature {
      font-size: clamp(2.5rem, 8vw, 6rem);
      font-weight: 300;
      line-height: 1;
      margin: 1rem 0;
    }

    .description {
      font-size: clamp(0.9rem, 4vw, 1.25rem);
      margin: 0.5rem 0;
    }

    .last-updated {
      font-size: clamp(0.75rem, 3vw, 0.9rem);
      margin-top: 1rem;
    }

    @media (max-width: 320px) {
      margin-bottom: 1rem;
    }
  }

  .details {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem 1rem;
    border-radius: 1rem;
    backdrop-filter: blur(5px);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    @media (min-width: 768px) {
      padding: 2rem;
    }

    @media (max-width: 320px) {
      padding: 1rem 0.5rem;
    }

    h3 {
      font-size: clamp(0.9rem, 4vw, 1.25rem);
      margin-bottom: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .detail-item {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      font-size: clamp(0.9rem, 3vw, 1rem);

      &:last-child {
        border-bottom: none;
      }

      svg {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.5rem;
        min-width: 24px;
      }

      .label {
        color: rgba(255, 255, 255, 0.7);
        text-align: left;
        padding: 0 1rem;
      }

      .value {
        color: #ffffff;
        font-weight: 500;
        text-align: right;
        min-width: 80px;
      }

      @media (max-width: 480px) {
        grid-template-columns: 24px 1fr auto;
        gap: 0.5rem;
        padding: 1rem 0;

        .label {
          padding: 0 0.5rem;
        }

        .value {
          min-width: 60px;
        }
      }

      @media (max-width: 320px) {
        grid-template-columns: 20px 1fr auto;
        gap: 0.25rem;
        padding: 0.75rem 0;
        font-size: 0.85rem;

        svg {
          font-size: 1.25rem;
          min-width: 20px;
        }

        .label {
          padding: 0 0.25rem;
        }

        .value {
          min-width: 50px;
        }
      }
    }
  }
`;

export const ForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 0.75rem;
    padding: 0.75rem;
  }

  @media (max-width: 704px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

export const ForecastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0.75rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  backdrop-filter: blur(5px);
  min-width: 120px;
  height: 160px;
  
  .date {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 0.25rem;
    line-height: 1.2;
  }
  
  .icon-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0.25rem 0;
    padding: 0.25rem;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }
  
  .temp {
    font-size: 1.25rem;
    margin-top: 0.5rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 0.25rem;
    line-height: 1.2;
  }

  @media (max-width: 768px) and (min-width: 704px) {
    padding: 0.75rem 0.25rem;
    height: 150px;
    min-width: 130px;

    .date {
      font-size: 0.85rem;
      margin-bottom: 0.25rem;
      padding: 0 0.15rem;
    }

    .temp {
      font-size: 1.1rem;
      margin-top: 0.25rem;
      padding: 0 0.15rem;
    }

    .icon-container {
      margin: 0.15rem 0;
      
      img {
        width: 35px;
        height: 35px;
      }
    }
  }

  @media (max-width: 704px) {
    padding: 0.75rem 0.5rem;
    height: 140px;
    min-width: 110px;

    .date {
      font-size: 0.85rem;
      margin-bottom: 0.25rem;
    }

    .temp {
      font-size: 1.1rem;
      margin-top: 0.25rem;
    }

    .icon-container {
      margin: 0.15rem 0;
      
      img {
        width: 35px;
        height: 35px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.25rem;
    height: 130px;
    min-width: 100px;

    .date {
      font-size: 0.8rem;
      margin-bottom: 0.15rem;
    }

    .temp {
      font-size: 1rem;
      margin-top: 0.15rem;
    }

    .icon-container {
      margin: 0.1rem 0;
      
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(220, 38, 38, 0.9);
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 200px;
  text-align: center;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  font-size: 1.1rem;
`;

export const LoadingSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(5px);
  
  &::after {
    content: '';
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`; 