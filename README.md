# Weather Dashboard

A modern weather dashboard built with React, TypeScript, and Vite. Features real-time weather data, 5-day forecast, and temperature unit conversion.

## Features

- Current weather display
- 5-day weather forecast
- Temperature unit conversion (Celsius/Fahrenheit)
- Search by city name
- Responsive design
- Local storage for last searched city
- Loading states and error handling

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeather API key:
```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
VITE_OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

- `VITE_OPENWEATHER_API_KEY`: Your OpenWeather API key
- `VITE_OPENWEATHER_API_URL`: OpenWeather API base URL

## Technologies Used

- React
- TypeScript
- Vite
- Styled Components
- OpenWeather API

## Project Structure

```
src/
  ├── components/        # React components
  ├── context/          # React context for state management
  ├── services/         # API services
  ├── types/            # TypeScript types
  └── utils/           # Utility functions
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
