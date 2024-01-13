// FavIcon.jsx

import React from 'react';
import '../styles/FavIcon.scss'; // Make sure to import your styles

const FavIcon = ({ liked }) => {
  // Adjust the styles or image based on the design feedback
  const iconClass = liked ? 'fav-icon liked' : 'fav-icon';

  return (
    <div className={iconClass}>
      {/* Your icon content */}
    </div>
  );
};

export default FavIcon;
