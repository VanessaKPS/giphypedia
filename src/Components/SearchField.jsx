import React, { useState } from 'react';

const SearchField = (props) => {
  const [search, setSearch] = useState('');
  return (
    <div className='search-input-container'>
      <input
        className='search-input'
        type='text'
        name=''
        value={search}
        placeholder='Search Gifs...'
        onChange={(e) => {
          props.searchGif(e.target.value);
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchField;
