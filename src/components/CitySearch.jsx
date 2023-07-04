import { useState, useEffect } from "react";
import Select from "react-select";
import { useGeocodingService } from "../hooks/useGeocodingService";
import LoadingSpinner from "./LoadingSpinner";

const CitySearch = ({ onCitySelection }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { data, loading, getGeocodingData } = useGeocodingService();

  useEffect(() => {
    if (!inputValue) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      getGeocodingData(inputValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    setSuggestions(data || []);
  }, [data]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleCitySelection = (selectedOption) => {
    onCitySelection(selectedOption);
    setSelectedCity(null);
    setInputValue("");
    document.activeElement?.blur();
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "300px",
      borderRadius: "0",
      borderColor: "#ccc",
      boxShadow: "none",
    }),
    menu: (provided) => ({
      ...provided,
      width: "300px",
    }),
    input: (provided) => ({
      ...provided,
      color: "#555",
    }),
  };

  return (
    <div className="relative flex items-center">
      <Select
        value={selectedCity}
        options={suggestions}
        onInputChange={handleInputChange}
        onChange={handleCitySelection}
        inputValue={inputValue}
        getOptionLabel={(option) => option.display_name}
        getOptionValue={(option) => option.place_id}
        placeholder="Search for a city"
        styles={customStyles}
      />
      {loading && (
        <div className="absolute -right-8">
          <LoadingSpinner size={20} />
        </div>
      )}
    </div>
  );
};

export default CitySearch;
