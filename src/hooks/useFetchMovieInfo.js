import { useEffect, useState } from "react";

import clientFactory from "../fetch";

const omdbClient = clientFactory(`${process.env.REACT_APP_OMDBAPI_URL}&i=`)

export default function useFetchMovieDetail(IMDbId) {
 
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    
    async function fetchImg() {
      try {
        const movieInfoRes = await omdbClient(IMDbId);
        setMovieInfo(movieInfoRes)
      } catch(err) {
        console.log(err);
      }
    }
    fetchImg()
  }, [IMDbId]);
  return movieInfo
}
