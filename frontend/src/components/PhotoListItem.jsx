import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import './PhotoListItem.scss';

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-details">
        <div className="user-info">
          <img src={profile} alt={`Profile of ${username}`} />
          <span>{username}</span>
        </div>
        <div className="location">
          {location.city}, {location.country}
        </div>
      </div>
      <PhotoFavButton />
    </div>
  );
};

export default PhotoListItem;