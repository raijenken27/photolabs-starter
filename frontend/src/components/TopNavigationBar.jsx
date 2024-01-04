
import React from 'react';

const TopNavigationBar = ({ hasFavoritedPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {hasFavoritedPhotos && (
        <span className="top-nav-bar__notification">New favorites!</span>
      )}
    </div>
  );
};

export default TopNavigationBar;