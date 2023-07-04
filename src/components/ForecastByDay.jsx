import { useEffect } from "react";
import { useForecastService } from "../hooks/useForcastService";
import { transformForecastData } from "../utils/transformForecastData";
import { isMobileDevice } from "../utils/isMobileDevice";
import LoadingSpinner from "./LoadingSpinner";
import CurrentWeather from "./CurrentWeather";
import ForecastByDayBlock from "./ForecastByDayBlock";
import ForecastByDayTabs from "./ForecastByDayTabs";

const ForecastByDay = ({ units, lat, lon, onWeatherCodeRetrieval }) => {
  const { data, loading, getForecastData } = useForecastService();

  useEffect(() => {
    getForecastData(lat, lon);
  }, [lat, lon]);

  const forecastData = data && transformForecastData(data, units);

  useEffect(() => {
    if (forecastData) {
      onWeatherCodeRetrieval(forecastData.currentWeather.weatherCode);
    }
  }, [forecastData, onWeatherCodeRetrieval]);

  if (!forecastData) {
    return null;
  }

  if (loading) {
    return <LoadingSpinner size={50} />;
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <div>
        <p className="text-lg text-gray-600">
          The current weather for <strong>{forecastData.city}</strong> is:
        </p>

        <CurrentWeather
          weather={forecastData.currentWeather}
          units={forecastData.units}
        />
      </div>

      {isMobileDevice() ? (
        <ForecastByDayBlock
          forecastByDayData={forecastData.listByDay}
          units={forecastData.units}
        />
      ) : (
        <ForecastByDayTabs
          forecastByDayData={forecastData.listByDay}
          units={forecastData.units}
        />
      )}
    </div>
  );
};

export default ForecastByDay;
