import axios from 'axios';
import apiConfig from '../config/weatherApiConfig';

const handleApiError = (error, customMessage) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const statusCode = error.response.status;
      const serverMessage =
        error.response.data.message || error.response.statusText;

      switch (statusCode) {
        case 400:
          throw new Error(
            `${customMessage}: Bad request. Please check your input. (${serverMessage})`
          );
        case 401:
          throw new Error(
            `${customMessage}: Unauthorized. Please check your API key. (${serverMessage})`
          );
        case 404:
          throw new Error(
            `${customMessage}: Not found. The requested resource doesn't exist. (${serverMessage})`
          );
        case 429:
          throw new Error(
            `${customMessage}: Too many requests. Please try again later. (${serverMessage})`
          );
        case 500:
        case 502:
        case 503:
        case 504:
          throw new Error(
            `${customMessage}: Server error. Please try again later. (${serverMessage})`
          );
        default:
          throw new Error(
            `${customMessage}: An unexpected error occurred. (${serverMessage})`
          );
      }
    } else if (error.request) {
      throw new Error(
        `${customMessage}: No response received from server. Please check your internet connection.`
      );
    } else {
      throw new Error(`${customMessage}: ${error.message}`);
    }
  } else {
    throw new Error(
      `${customMessage}: An unexpected error occurred. ${error.message}`
    );
  }
};

export const getLocationCoords = async (location) => {
  try {
    const response = await axios.get(
      `${apiConfig.WEATHER_API_ENDPOINT}q=${encodeURIComponent(location)}`
    );

    const {
      coord,
      sys: { country },
    } = response.data;

    return { ...coord, country };
  } catch (error) {
    handleApiError(error, 'Failed to get location coordinates');
  }
};

export const getCityName = async (lon, lat) => {
  try {
    const response = await axios.get(
      `${apiConfig.WEATHER_API_ENDPOINT}lon=${lon}&lat=${lat}`
    );

    const {
      name,
      sys: { country },
    } = response.data;

    return { name, country };
  } catch (error) {
    handleApiError(error, 'Failed to get city name');
  }
};

export const getCurrentWeatherData = async (lon, lat) => {
  try {
    const response = await axios.get(
      `${apiConfig.WEATHER_API_ENDPOINT}lon=${lon}&lat=${lat}`
    );

    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to get current weather data');
  }
};

export const getForecastData = async (lon, lat) => {
  try {
    const response = await axios.get(
      `${apiConfig.WEATHER_DATA_ENDPOINT}lon=${lon}&lat=${lat}`
    );

    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to get forecast data');
  }
};
