import WeatherBackground from "./WeatherBackground";

const Layout = ({ children, weatherImageUrl }) => {
  return (
    <div className="w-screen min-h-screen md:p-4">
      <WeatherBackground weatherImageUrl={weatherImageUrl} />
      <div className="relative flex flex-col items-center justify-center w-full p-4 py-8 md:p-20 space-y-8 bg-white md:rounded-lg shadow-xl bg-opacity-90 max-w-[1000px] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
