import React from 'react';

let GifItem = (props) => {
  const { title } = props.gif;
  const { url } = props.gif.images.original;
  return (
    <div className='gif-item'>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifItem;
