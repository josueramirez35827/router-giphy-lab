import { useState, useEffect } from "react";
import axios from "axios";
import { TREND_URL } from "../random/Contants";

function Trending() {

  const [trending, setTrending] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(TREND_URL);
      console.log(response);
      const results = response.data.data[0].images.downsized_large.url;
      setTrending(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Trendest Gif Currently</h1>
      <img src={trending} alt='stuff' />

    </div>
  );
};

export default Trending;