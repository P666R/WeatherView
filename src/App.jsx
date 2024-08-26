import { ThemeProvider } from './context/ThemeContext';
import { WeatherProvider } from './context/WeatherContext';
import WeatherDashboard from './components/WeatherDashboard';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-200 ${
        isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <ThemeToggle />
      <WeatherDashboard />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <AppContent />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
