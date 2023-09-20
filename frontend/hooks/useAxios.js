import axios from "axios";
import { useState } from "react";

export const useAxios = (reqType, endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState();

  const getData = () => {
    setLoading(true);
    axios[reqType](endpoint)
      .then((res) => setData(res.data))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };
  return [data, getData, loading, err];
};
