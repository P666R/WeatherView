import { useWeather } from '../hooks/useWeather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Forecast = () => {
  const { state } = useWeather();
  const { forecast, unit } = state;

  const dailyForecasts = forecast
    .filter((item) => item.dt_txt.includes('12:00:00'))
    .slice(0, 5);

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const convertTemp = (temp) => {
    if (unit === 'imperial') {
      return ((temp * 9) / 5 + 32).toFixed(1);
    }
    return temp;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {dailyForecasts.map((item) => (
          <Card key={item.dt}>
            <CardHeader>
              <CardTitle className="text-lg">
                {formatDate(item.dt_txt)}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="w-16 h-16 mx-auto"
              />
              <p className="text-2xl font-bold">
                {convertTemp(item.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
              </p>
              <p className="capitalize">{item.weather[0].description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
