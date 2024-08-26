import { useState } from 'react';
import { useWeather } from '../hooks/useWeather';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WeatherDashboard = () => {
  const { state, dispatch, fetchWeatherData } = useWeather();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchWeatherData(searchQuery);
    }
  };

  const toggleUnit = () => {
    dispatch({ type: 'TOGGLE_UNIT' });
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Weather Forecast Dashboard
        </h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        {state.error && (
          <p className="text-red-500 text-center">{state.error}</p>
        )}
        {state.isLoading && <p className="text-center">Loading...</p>}
        {state.currentWeather && (
          <>
            <div className="flex justify-end">
              <Button onClick={toggleUnit} variant="outline">
                Switch to °{state.unit === 'metric' ? 'F' : 'C'}
              </Button>
            </div>
            <CurrentWeather />
            <Forecast />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherDashboard;
