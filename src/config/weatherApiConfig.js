const OPEN_WEATHER_MAP_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const apiConfig = {
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric&`,
};

export default apiConfig;
