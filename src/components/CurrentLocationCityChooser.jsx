import { retrieveGeolocation } from "../utils/retrieveGeolocation";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import locationSvg from "/img/location.svg";

const GeolocationCityChooser = ({ onLocationRetrieval }) => {
  const handleLocationRetrival = () => {
    retrieveGeolocation(
      (lat, lon) => {
        onLocationRetrieval({
          lat,
          lon,
        });
      },
      (error) => {
        throw new Error(error);
      }
    );
  };

  return (
    <Tooltip title="Use my current location" placement="top" arrow>
      <Button variant="contained" size="medium" onClick={handleLocationRetrival}>
        <img src={locationSvg} alt="location" />
      </Button>
    </Tooltip>
  );
};

export default GeolocationCityChooser;
