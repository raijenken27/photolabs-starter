import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import { usePhotoContext } from '../contexts/PhotoContext';

const HomeRoute = () => {
  const { favoritedPhotos } = usePhotoContext();

  return (
    <div>
      <TopNavigationBar hasFavoritedPhotos={favoritedPhotos.length > 0} />
    </div>
  );
};

export default HomeRoute;