import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUser = ({ userId }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [userId]);
  return { loading, user, error };
};
export default useFetchUser;
