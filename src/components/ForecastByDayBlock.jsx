import WeatherDisplay from "./WeatherDisplay";

const ForecastByDayBlock = ({ forecastByDayData, units }) => {
  return (
    <div>
      <h2 className="text-lg">Forecast for the next 5 days:</h2>

      <div className="flex flex-col mt-4 space-y-4">
        {forecastByDayData.map((forecastData) => (
          <div key={forecastData.dt}>
            <h3 className="text-xl font-bold text-center">
              {forecastData.date}
            </h3>

            <div className="flex flex-col mt-4 space-y-6">
              {forecastData.list.map((weatherData) => (
                <WeatherDisplay
                  key={weatherData.id}
                  weatherData={weatherData}
                  units={units}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastByDayBlock;
