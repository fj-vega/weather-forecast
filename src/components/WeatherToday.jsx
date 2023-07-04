import { useEffect, useState } from "react";
import { useWeatherService } from "../hooks/useWeatherService";
import { transformWeatherData } from "../utils/transformWeatherData";

const WeatherDisplay = ({ lat, lon }) => {
  const [units, setUnits] = useState("metric"); // ["metric", "imperial"]
  const { data, loading, error, getWeatherData } = useWeatherService();

  useEffect(() => {
    getWeatherData(lat, lon);
  }, [lat, lon]);

  const weatherData = data && transformWeatherData(data, units);

  const handleUnitsChange = (event) => {
    setUnits(event.target.value);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && (
        <div className="flex flex-col space-y-4">
          <h2>{weatherData.cityName}</h2>

          <div className="flex items-center space-x-2">
            <img src={weatherData.icon} alt={weatherData.description} />
            <p>{weatherData.description}</p>
          </div>
          
          <p>Temperature: {weatherData.temperature}</p>
          <p>Feels like: {weatherData.feelsLike}</p>
          <p>Wind: {weatherData.windSpeed}</p>
          <p>Humidity: {weatherData.humidity}</p>

          <label className="flex flex-col space-y-2">
            <span className="text-sm">Units</span>
            <select value={units} onChange={handleUnitsChange}>
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </label>
        </div>
      )}
    </>
  );
};

export default WeatherDisplay;
