import { useEffect, useState } from "react";
import clsx from "clsx";

const DEFAULT_BACKGROUND_IMAGE_URL = "/img/background.jpg";

const WeatherBackground = ({ weatherImageUrl }) => {
  const [isChangingBackground, setIsChangingBackground] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(weatherImageUrl);
  const [containerBackground, setContainerBackground] = useState(
    DEFAULT_BACKGROUND_IMAGE_URL
  );

  useEffect(() => {
    if (weatherImageUrl !== currentBackground) {
      setIsChangingBackground(true);

      const backdropTimeout = setTimeout(() => {
        setIsChangingBackground(false);
        setCurrentBackground(weatherImageUrl);
      }, 300);

      return () => clearTimeout(backdropTimeout);
    }
  }, [weatherImageUrl, currentBackground]);

  useEffect(() => {
    if (currentBackground) {
      const mainBackgroundTimeout = setTimeout(() => {
        setContainerBackground(weatherImageUrl);
      }, 500);

      return () => clearTimeout(mainBackgroundTimeout);
    }
  }, [weatherImageUrl, currentBackground]);

  const backdropClassName = clsx(
    "absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out",
    isChangingBackground ? "opacity-0" : "opacity-100"
  );

  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{ backgroundImage: `url(${containerBackground})` }}
    >
      <div
        className={backdropClassName}
        style={{
          backgroundImage: currentBackground
            ? `url(${currentBackground})`
            : "none",
        }}
      ></div>
    </div>
  );
};

export default WeatherBackground;
