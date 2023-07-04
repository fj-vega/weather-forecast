const PATH_TO_IMAGES = "/img/";
const IMAGE_EXTENSION = ".jpg";

const getImageNameFromCode = (weatherCode) => {
  if (weatherCode >= 200 && weatherCode <= 232) {
    return "thunderstorm";
  } else if (weatherCode >= 300 && weatherCode <= 321) {
    return "drizzle";
  } else if (weatherCode >= 500 && weatherCode <= 531) {
    return "rain";
  } else if (weatherCode >= 600 && weatherCode <= 622) {
    return "snow";
  } else if (weatherCode >= 701 && weatherCode <= 781) {
    return "atmosphere";
  } else if (weatherCode === 800) {
    return "clear";
  } else if (weatherCode >= 801 && weatherCode <= 804) {
    return "clouds";
  } else {
    return "clear";
  }
};

export const getWeatherImageFromCode = (weatherCode) => {
  const imageName = getImageNameFromCode(weatherCode);
  return `${PATH_TO_IMAGES}${imageName}${IMAGE_EXTENSION}`;
};
