import React, { useEffect, useState } from 'react';
import Title from './Title';
import GifItem from './GifItem';
import SearchField from './SearchField';
import axios from 'axios';

let App = () => {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('dog');
  useEffect(() => {
    const getGifs = async () => {
      const res = await axios(
        `https://api.giphy.com/v1/gifs/search?api_key=nToCgEWXWhkvyisbiP0ZmX0CiJWNpPZQ&q=${search}&limit=30&offset=0&rating=G&lang=en`
      );
      setGifs(res.data.data);
    };
    getGifs();
  }, [search]);
  return (
    <div>
      <Title />
      <SearchField
        searchGif={(e) => {
          setSearch(e);
        }}
      />
      <div className='gif-output-container'>
        {gifs.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default App;
