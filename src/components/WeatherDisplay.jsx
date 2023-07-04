const WeatherDisplay = ({ weatherData, units }) => {
  return (
    <div className="flex flex-col space-y-4 text-sm">
      <div className="flex items-center text-base">
        <img src={weatherData.icon} alt={weatherData.description} />

        <div>
          <p>{weatherData.name}</p>
          <p>{weatherData.description}</p>
        </div>

        <h2 className="ml-auto font-bold text-center text-blue-500">
          {weatherData.time}
        </h2>
      </div>
      <p>
        Temperature: {weatherData.temperature}
        {units.temperature}
      </p>
      <p>
        Feels like: {weatherData.feelsLike}
        {units.temperature}
      </p>
      <p>
        Rain: {weatherData.rainProbability}
        {units.rainProbability}
      </p>
      <p>
        Wind: {weatherData.windSpeed}
        {units.windSpeed}
      </p>
      <p>
        Humidity: {weatherData.humidity}
        {units.humidity}
      </p>
    </div>
  );
};

export default WeatherDisplay;
