import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [leng, setLeng] = useState(0);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setLeng(res.data.length);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);
  return { loading, data, error };
};

export default useFetch;
