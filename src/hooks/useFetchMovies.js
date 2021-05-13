import { useEffect, useState } from "react";

import clientFactory, { rapidAPIAuthHeader } from "../fetch";

const rapidAPIClient = clientFactory(process.env.REACT_APP_RAPIDAPI_URL + "/", {
  "Content-Type": "application/json",
});

export default function useFetchMovieData(endpoint, key) {
  const [data, setData] = useState([]);
  // 這裡用這個怪怪的？
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await rapidAPIClient(endpoint, {
          headers: rapidAPIAuthHeader,
        });
        const pureIMDbIds = response.map((url) => {
          return url.match(/tt(\d){6,}/)[0];
        });
        localStorage.setItem(
          key,
          JSON.stringify({ data: pureIMDbIds, time: new Date() })
        );
        setData(pureIMDbIds);
      } catch (err) {
        console.log(err);
      }
    }

    const localData = JSON.parse(localStorage.getItem(key));
    if (!localData) {
      fetchData();
      return;
    }
    setData(localData.data);
  }, [endpoint, key]);

  return data;
}
