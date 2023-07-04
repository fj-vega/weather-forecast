import { useFetchWithCaching } from "./useFetchWithCaching";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const buildWeatherUrl = (lat, lon) => {
  return `${API_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
};

export const useWeatherService = () => {
  const { data, loading, error, fetchData } = useFetchWithCaching();

  const getWeatherData = (lat, lon) => {
    const url = buildWeatherUrl(lat, lon);
    fetchData(url);
  };

  return { data, loading, error, getWeatherData };
};
