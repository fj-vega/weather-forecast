const CurrentWeather = ({ weather, units }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={weather.icon} alt={weather.description} className="w-24 h-24" />

      <div className="text-base ">
        <p>{weather.description}</p>
        <p>
          {weather.temperature} {units.temperature}
        </p>
        <p className="text-sm text-gray-500">
          Rain: {weather.rainProbability}
          {units.rainProbability}
        </p>
        <p className="text-sm text-gray-500">
          Wind: {weather.windSpeed}
          {units.windSpeed}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
