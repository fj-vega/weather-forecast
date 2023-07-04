import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import Header from "./components/Header";
import CitySearch from "./components/CitySearch";
import GeolocationCityChooser from "./components/CurrentLocationCityChooser";
import UnitsSelector from "./components/UnitsSelector";
import ForecastByDay from "./components/ForecastByDay";
import { getWeatherImageFromCode } from "./utils/getWeatherImageFromCode";

const App = () => {
  const [units, setUnits] = useState("metric");
  const [coordinates, setCoordinates] = useState(null);
  const [weatherImageUrl, setWeatherImageUrl] = useState(null);

  const handleLocationSelection = (location) => {
    setCoordinates({
      lat: location.lat,
      lon: location.lon,
    });
  };

  const handleWeatherCodeRetrieval = (weatherCode) => {
    const weatherImageUrl = getWeatherImageFromCode(weatherCode);
    setWeatherImageUrl(weatherImageUrl);
  };

  return (
    <Layout weatherImageUrl={weatherImageUrl}>
      <Header />

      <div className="flex flex-col items-center md:flex-row">
        <CitySearch onCitySelection={handleLocationSelection} />

        <div className="flex items-center mt-4 space-x-4 md:mt-0">
          <UnitsSelector units={units} onUnitsChange={setUnits} />
          <GeolocationCityChooser
            onLocationRetrieval={handleLocationSelection}
          />
        </div>
      </div>

      <ErrorBoundary>
        {coordinates && (
          <ForecastByDay
            units={units}
            lat={coordinates.lat}
            lon={coordinates.lon}
            onWeatherCodeRetrieval={handleWeatherCodeRetrieval}
          />
        )}
      </ErrorBoundary>
    </Layout>
  );
};

export default App;
