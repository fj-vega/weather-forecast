import { groupByDay } from "./groupByDay";
import { transformWeatherData } from "./transformWeatherData";
import { createReadableDate } from "./createReadableDate";
import { createReadableTime } from "./createReadableTime";

export const transformForecastData = (forecastData, units) => {
  const groupedForecastData = groupByDay(forecastData.list);

  return {
    city: forecastData.city.name,
    units: {
      temperature: units === "metric" ? "°C" : "°F",
      windSpeed: units === "metric" ? "km/h" : "mph",
      humidity: "%",
      rainProbability: "%",
    },
    currentWeather: transformWeatherData(forecastData.list[0], units),
    listByDay: groupedForecastData.map((group) => ({
      dt: group.dt,
      date: createReadableDate(group.dt * 1000),
      list: group.list.map((forecast) => ({
        id: forecast.dt,
        time: createReadableTime(forecast.dt * 1000),
        ...transformWeatherData(forecast, units),
      })),
    })),
  };
};
