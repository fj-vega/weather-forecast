import { useFetchWithCaching } from "./useFetchWithCaching";

const API_URL = "https://nominatim.openstreetmap.org/search?format=json&q=";

export const useGeocodingService = () => {
  const { data, loading, error, fetchData } = useFetchWithCaching();

  const getGeocodingData = (query) => {
    const url = API_URL + query;
    fetchData(url);
  };

  return { data, loading, error, getGeocodingData };
};
