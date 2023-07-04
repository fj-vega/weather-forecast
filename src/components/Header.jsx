import lighthouseSvg from "/img/lighthouse.svg";

const Header = () => {
  return (
    <header className="flex items-start space-x-4">
      <img src={lighthouseSvg} alt="lighthouse" width={32} />
      <h1 className="text-3xl text-blue-600">Check the weather</h1>
    </header>
  );
};

export default Header;
