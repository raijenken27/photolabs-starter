import React, { useState } from 'react';
import './PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    setIsFav((prevIsFav) => !prevIsFav);
  };

  return (
    <div className={`photo-fav-button ${isFav ? 'active' : ''}`} onClick={handleClick}>
      <i className="fas fa-heart"></i>
    </div>
  );
};

export default PhotoFavButton;