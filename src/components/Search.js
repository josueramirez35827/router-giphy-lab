import { useState, useEffect } from 'react';
import axios from 'axios';
import { SEARCH_URL } from "../random/Contants";

function Search() {

  const [search, setSearch] = useState("")
  const [giphy, setGiphy] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${SEARCH_URL}&q=${search}`);
      console.log(response);
      const results = response.data.data[0].images.downsized_large.url;
      setGiphy(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Giphy Search Generator</h1>
      <h3>Type text into the form and hit Search</h3>
      <input className='input-field' type='text' onChange={(e) => setSearch(e.target.value)} />
      <button onClick={fetchData}> Search </button>
      <img src={giphy} alt="stuff" />
    </div>
  );
};

export default Search;