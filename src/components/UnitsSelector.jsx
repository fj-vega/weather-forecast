const UnitsSelector = ({ units, onUnitsChange }) => {
  const handleUnitsChange = (event) => {
    onUnitsChange(event.target.value);
  };

  return (
    <select
      className="px-4 py-2 text-gray-600 rounded w-26 md:absolute md:top-4 md:right-4"
      value={units}
      onChange={handleUnitsChange}
    >
      <option value="metric">Metric</option>
      <option value="imperial">Imperial</option>
    </select>
  );
};

export default UnitsSelector;
