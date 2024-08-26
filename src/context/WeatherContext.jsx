import { createContext, useReducer } from 'react';
import {
  getCurrentWeatherData,
  getForecastData,
  getLocationCoords,
} from '../services/weatherService';

const initialState = {
  city: '',
  country: '',
  currentWeather: null,
  forecast: [],
  isLoading: false,
  error: null,
  unit: 'metric',
};

const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WEATHER_DATA':
      return {
        ...state,
        currentWeather: action.payload.currentWeather,
        forecast: action.payload.forecast,
        isLoading: false,
        error: null,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        city: action.payload.city,
        country: action.payload.country,
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'TOGGLE_UNIT':
      return {
        ...state,
        unit: state.unit === 'metric' ? 'imperial' : 'metric',
      };
    default:
      return state;
  }
};

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const fetchWeatherData = async (city) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { lat, lon, country } = await getLocationCoords(city);
      dispatch({ type: 'SET_LOCATION', payload: { city, country } });

      const currentWeather = await getCurrentWeatherData(lon, lat);
      const forecastData = await getForecastData(lon, lat);

      dispatch({
        type: 'SET_WEATHER_DATA',
        payload: { currentWeather, forecast: forecastData.list },
      });
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: error.message,
      });
    }
  };

  return (
    <WeatherContext.Provider value={{ state, dispatch, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
