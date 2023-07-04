import { useFetchWithCaching } from "./useFetchWithCaching";

const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const buildForecastUrl = (lat, lon) => {
  return `${API_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
};

export const useForecastService = () => {
  const { data, loading, error, fetchData } = useFetchWithCaching();

  const getForecastData = (lat, lon) => {
    const url = buildForecastUrl(lat, lon);
    fetchData(url);
  };

  return { data, loading, error, getForecastData };
};
