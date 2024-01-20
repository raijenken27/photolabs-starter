import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation
        topics={props.topics}
        favList={props.favList}
      />
      <PhotoList
        photos={props.photos}
        handleFavButton={props.handleFavButton}
        isPhotoLiked={props.isPhotoLiked}
        setPhotoDetails={props.setPhotoDetails}
      />
    </div>
  );
};

export default HomeRoute;
