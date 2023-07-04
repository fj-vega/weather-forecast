import { useState } from "react";
import axios from "axios";
import { withCaching } from "../utils/withCaching";

export const useFetchWithCaching = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = withCaching(async (url, params = {}) => {
    setLoading(true);

    try {
      const response = await axios.get(url, params);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  });

  return { data, loading, error, fetchData };
};
