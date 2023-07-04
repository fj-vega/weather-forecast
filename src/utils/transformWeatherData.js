import { convertCelsiusToFahrenheit } from "./convertCelsiusToFahrenheit";
import { convertKmhToMph } from "./convertKmhToMph";
import { roundToTwoDecimalPlaces } from "./roundToTwoDecimalPlaces";
import { capitalize } from "./capitalize";

export const transformWeatherData = (weatherData, units) => {
  const getConvertedTemperature = (temperature) => {
    const convertedTemperature =
      units === "metric"
        ? temperature
        : convertCelsiusToFahrenheit(temperature);

    return roundToTwoDecimalPlaces(convertedTemperature);
  };

  const getConvertedWindSpeed = (windSpeed) => {
    const convertedWindSpeed =
      units === "metric" ? windSpeed : convertKmhToMph(windSpeed);

    return roundToTwoDecimalPlaces(convertedWindSpeed);
  };

  return {
    name: weatherData.weather[0].main,
    description: capitalize(weatherData.weather[0].description),
    temperature: getConvertedTemperature(weatherData.main.temp),
    feelsLike: getConvertedTemperature(weatherData.main.feels_like),
    humidity: weatherData.main.humidity,
    windSpeed: getConvertedWindSpeed(weatherData.wind.speed),
    rainProbability: weatherData.pop,
    icon: `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
    weatherCode: weatherData.weather[0].id,
  };
};
