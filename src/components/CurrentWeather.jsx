import { useWeather } from '../hooks/useWeather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate, convertTemp } from '../lib/utils';

const CurrentWeather = () => {
  const { state } = useWeather();
  const { currentWeather, unit } = state;

  const { dt, timezone, name, sys, main, weather, wind } = currentWeather;
  const date = new Date((dt + timezone) * 1000);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Current Weather in {name}, {sys.country}
          <br />
          {formatDate(date)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-5xl font-bold">
              {convertTemp(main.temp, unit)}°{unit === 'metric' ? 'C' : 'F'}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt={weather[0].description}
              className="w-24 h-24"
            />
            <p className="text-xl capitalize">{weather[0].description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <WeatherDetail
            label="Min temp"
            value={`${convertTemp(main.temp_min, unit)}°${
              unit === 'metric' ? 'C' : 'F'
            }`}
          />
          <WeatherDetail
            label="Max temp"
            value={`${convertTemp(main.temp_max, unit)}°${
              unit === 'metric' ? 'C' : 'F'
            }`}
          />
          <WeatherDetail label="Humidity" value={`${main.humidity}%`} />
          <WeatherDetail
            label="Wind"
            value={`${wind.speed} ${unit === 'metric' ? 'm/s' : 'mph'} ${
              wind.deg
            }°`}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const WeatherDetail = ({ label, value }) => (
  <p>
    <span className="font-semibold">{label}:</span> {value}
  </p>
);

export default CurrentWeather;
